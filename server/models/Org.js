const mongoose = require('mongoose');
const org_type = require('../models/orgType');
const { Schema } = mongoose;
const OrgSchema = new Schema({
  organisation_name: { type: String, required: true },
  org_type: { type: Schema.Types.ObjectId, ref: org_type },
  street: { type: String, required: false },
  house_number: { type: String, required: false },
  additional_house_number: { type: String, required: false },
  postcode: { type: String, required: false },
  place: { type: String, required: false },
  country: { type: String, required: false },
  email: { type: String, required: false },
  website: { type: String, required: false },
});

const organisation = (module.exports = mongoose.model(
  'organisation',
  OrgSchema
));

module.exports.get = (callback, limit) => {
  organisation
    .find(callback)
    .populate('org_type', 'name')
    .limit(limit);
};
