const Mongoose = require('mongoose');
const slugify = require('slugify');
const { Schema } = Mongoose;

// Helper to generate unique slug
async function generateUniqueSlug(doc) {
  const baseSlug = slugify(doc.name, { lower: true, strict: true });
  let slug = baseSlug;
  let counter = 1;
  const Model = doc.constructor;
  while (await Model.exists({ slug })) {
    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }
  return slug;
}

// Brand Schema
const BrandSchema = new Schema({
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
  merchant: {
    type: Schema.Types.ObjectId,
    ref: 'Merchant',
    default: null
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

BrandSchema.pre('save', async function (next) {
  if (!this.isModified('name')) return next();
  try {
    this.slug = await generateUniqueSlug(this);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = Mongoose.model('Brand', BrandSchema);
