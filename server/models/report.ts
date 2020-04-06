require('dotenv').config();
// @ts-ignore
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
// @ts-ignore
const targetBeneficiary = require('../models/targetBeneficiary');
// @ts-ignore
const policyPriority = require('../models/policyPriority');
// @ts-ignore
const location = require('../models/location');
// @ts-ignore
const project = require('../models/project');
// @ts-ignore
const { Schema } = mongoose;

var connection = mongoose.createConnection(process.env.REACT_APP_MONGO_DB_URL);
autoIncrement.initialize(connection);

const ReportSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  location: {
    type: Schema.Types.ObjectId,
    ref: location,
    index: true,
    required: false,
  },
  country: { type: String, required: true },
  total_target_beneficiaries: { type: Number, default: 0, required: true },
  target_beneficiaries: [
    { type: Schema.Types.ObjectId, ref: targetBeneficiary, index: true },
  ],
  total_target_beneficiaries_commited: {
    type: Number,
    default: 0,
    required: false,
  },
  project: { type: Schema.Types.ObjectId, ref: project, index: true },
  key_outcomes: { type: String, required: true },
  monitor_report_outcomes: { type: String, required: true },
  media: [{ type: String, required: false }],
  policy_priority: {
    type: Schema.Types.ObjectId,
    ref: policyPriority,
    required: false,
  },
  budget: { type: Number, required: true },
  insContribution: { type: Number, required: true },
  key_implementation_challenges: { type: String, required: true },
  other_project_outcomes: { type: String, required: true },
  plans: { type: String, required: true },
  other_comments: { type: String, required: true },
  reportID: { type: Number, required: true },
  place_name: { type: String, required: false },
  isDraft: { type: Boolean, default: false, required: true },
});

ReportSchema.plugin(autoIncrement.plugin, {
  model: 'report',
  field: 'reportID',
  startAt: 1000,
});

ReportSchema.index({ '$**': 'text' });

const report = (module.exports = mongoose.model('report', ReportSchema));

module.exports.get = (callback: any, limit: any) => {
  report
    .find(callback)
    .populate('location')
    .populate('project')
    .populate({
      path: 'policy_priorities',
      select: 'name',
    })
    .populate({
      path: 'target_beneficiaries',
      select: 'name',
    })
    .limit(limit);
};
