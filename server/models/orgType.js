const mongoose = require('mongoose');
const OrgTypeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: false },
});

const orgType = (module.exports = mongoose.model('orgType', OrgTypeSchema));

module.exports.get = (callback, limit) => {
  orgType.find(callback).limit(limit);
};
