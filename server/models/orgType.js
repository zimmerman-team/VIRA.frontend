const mongoose = require('mongoose');
const OrgTypeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: false },
});

const orgType = (module.exports = mongoose.model('orgType', OrgTypeSchema));
