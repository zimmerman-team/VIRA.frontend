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

let url = 'mongodb://localhost:27017/insinger';
var connection = mongoose.createConnection(url);
autoIncrement.initialize(connection);

const ReportSchema = new Schema({
  title: { type: String, required: false },
  date: { type: String, required: true },
  location: {
    type: Schema.Types.ObjectId,
    ref: location,
    index: true,
    required: false,
  },
  country: { type: String, required: false },
  total_target_beneficiaries: { type: Number, default: 0, required: false },
  target_beneficiaries: [
    { type: Schema.Types.ObjectId, ref: targetBeneficiary, index: true },
  ],
  project: { type: Schema.Types.ObjectId, ref: project, index: true },
  key_outcomes: { type: String, required: true },
  monitor_report_outcomes: { type: String, required: true },
  media: { type: String, required: false },
  policy_priorities: [{ type: Schema.Types.ObjectId, ref: policyPriority }],
  key_implementation_challenges: { type: String, required: true },
  other_project_outcomes: { type: String, required: true },
  plans: { type: String, required: true },
  other_comments: { type: String, required: true },
  reportID: { type: Number, required: true },
});

ReportSchema.plugin(autoIncrement.plugin, {
  model: 'report',
  field: 'reportID',
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
