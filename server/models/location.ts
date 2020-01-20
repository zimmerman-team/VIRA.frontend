// @ts-ignore
const mongoose = require('mongoose');
// @ts-ignore
const { Schema } = mongoose;

const locationSchema = new Schema({
  long: { type: String, required: true },
  lat: { type: String, required: true },
});

// @ts-ignore
const location = (module.exports = mongoose.model(
  'locationSchema',
  locationSchema
));

module.exports.get = (callback: any, limit: any) => {
  locationSchema.find(callback).limit(limit);
};
