const mongoose = require('mongoose');
const { Schema } = mongoose;
const organisation = require('../models/Org');
const PersonSchema = new Schema({
  family_name: { type: String, required: true },
  initials: { type: String, required: false },
  name_insertion: { type: String, required: false },
  title: { type: String, required: false },
  email: { type: String, required: false },
  login_email: { type: String, required: false },
  sex: { type: String, required: false },
  role: { type: String, required: false },
  organisation: { type: Schema.Types.ObjectId, ref: organisation },
});

module.exports = mongoose.model('responsiblePerson', PersonSchema);
