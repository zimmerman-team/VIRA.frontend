const mongoose = require('mongoose');
const { Schema } = mongoose;
const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: false },
});

module.exports = mongoose.model('projectCategory', CategorySchema);
