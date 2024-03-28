import mongoose, { Schema } from 'mongoose';

const OrderSchema = new mongoose.Schema({
    userid: {
        type: Schema.Types.ObjectId ,
        ref: 'users',
    },
  orderNumber: {
    type: Number,
  },
  foods:[{
    type: Schema.Types.ObjectId ,
    ref: 'foods',
  }],
  totalPrice: {
    type: Number,
  },
  process: {
    type: String,
    enum: ['waiting', 'progress', 'delivered'],
    default: 'waiting',
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  district: {
    type: String,
  },
  Khoroo: {
    type: String,
  },
  Apartment: {
    type: String,
  },
  Payment: {
    type: String,
    enum:['notpaid', 'paid'],
    default: 'notpaid',
  }
});

const OrderModel = mongoose.model('order', OrderSchema);

export { OrderModel };