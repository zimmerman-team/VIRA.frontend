// @ts-ignore
const mongoose = require('mongoose');
// @ts-ignore
const { Schema } = mongoose;

const targetBeneficiarySchema = new Schema({
  name: { type: String, required: true },
});

// @ts-ignore
const targetBeneficiary = (module.exports = mongoose.model(
  'targetBeneficiarySchema',
  targetBeneficiarySchema
));

module.exports.get = (callback: any, limit: any) => {
  targetBeneficiarySchema.find(callback).limit(limit);
};
