const mongoose = require('mongoose');
const { Schema } = mongoose;
const organisation = require('../models/Org');
const category = require('../models/project_categroy');

const ProjectSchema = new Schema({
  project_number: { type: String, required: true },
  project_name: { type: String, required: true },
  project_description: { type: String, required: false },
  duration: { type: String, required: false },
  start_date: { type: String, required: false },
  end_date: { type: String, required: false },
  total_amount: { type: Number, required: false },
  decision_date: { type: String, required: false },
  decision: { type: String, required: false },
  allocated_amount: { type: Number, required: false },
  released_amount: { type: Number, required: false },
  paid_amount: { type: Number, required: false },
  organisation: [{ type: Schema.Types.ObjectId, ref: organisation }],
  category: { type: Schema.Types.ObjectId, ref: category },
});

module.exports = mongoose.model('project', ProjectSchema);
