const Mongoose = require('mongoose');
const slugify = require('slugify');
const { Schema } = Mongoose;

// Category Schema
const CategorySchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true
  },
  name: {
    type: String,
    trim: true
  },
  slug: {
    type: String,
    unique: true
  },
  image: {
    data: Buffer,
    contentType: String
  },
  description: {
    type: String,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

// Helper to generate unique slug
async function generateUniqueSlug(doc) {
  const baseSlug = slugify(doc.name, { lower: true, strict: true });
  let slug = baseSlug;
  let counter = 1;
  // "this" is the model when called via static or constructor, but we pass doc to function
  const Model = doc.constructor;
  while (await Model.exists({ slug })) {
    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }
  return slug;
}

CategorySchema.pre('save', async function (next) {
  if (!this.isModified('name')) return next();
  try {
    this.slug = await generateUniqueSlug(this);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = Mongoose.model('Category', CategorySchema);
