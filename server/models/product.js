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

// Product Schema
const ProductSchema = new Schema({
  sku: {
    type: String
  },
  name: {
    type: String,
    trim: true
  },
  slug: {
    type: String,
    unique: true
  },
  imageUrl: {
    type: String
  },
  imageKey: {
    type: String
  },
  description: {
    type: String,
    trim: true
  },
  quantity: {
    type: Number
  },
  price: {
    type: Number
  },
  taxable: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    default: null
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

ProductSchema.pre('save', async function (next) {
  if (!this.isModified('name')) return next();
  try {
    this.slug = await generateUniqueSlug(this);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = Mongoose.model('Product', ProductSchema);
