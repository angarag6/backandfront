import mongoose, { Schema } from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  foods:[{
    type: Schema.Types.ObjectId ,
    ref: 'foods',
  }],
});

const CategoryModel = mongoose.model('categories', CategorySchema);

export { CategoryModel };