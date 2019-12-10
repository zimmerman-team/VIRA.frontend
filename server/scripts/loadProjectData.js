// @ts-ignore
const mongoose = require('mongoose');
const orgType = require('../models/orgType');
const category = require('../models/project_categroy');
const organisation = require('../models/Org');
const project = require('../models/project');
const responsible_person = require('../models/responsiblePerson');
const csvtojson = require('csvtojson');
const fs = require('fs');
let url = 'mongodb://localhost:27017/insinger';

const db = mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log('Successfully connected to MongoDB');
    }
  }
);

const stiching = new orgType({ name: 'Stiching', description: 'Stiching' });
const vereniging = new orgType({
  name: 'Vereniging',
  description: 'Vereniging',
});

const diversen = new category({ name: 'diversen', description: 'diversen' });
const restauraties = new category({
  name: 'restauraties',
  description: 'restauraties',
});
const predikantsplaatsen = new category({
  name: 'predikantsplaatsen',
  description: 'predikantsplaats',
});
const jeugdwerk = new category({ name: 'jeugdwerk', description: 'jeugdwerk' });
const Overigen = new category({ name: 'Overigen', description: 'Overigen' });

stiching.save();
vereniging.save();

restauraties.save();
predikantsplaatsen.save();
jeugdwerk.save();
Overigen.save();
diversen.save();

csvtojson()
  .fromFile('./insinger_data.csv')
  .then(csvData => {
    fs.writeFile('insingerData.json', JSON.stringify(csvData), err => {
      if (err) {
        console.log('error');
      } else {
        console.log('json file created');
      }
    });
    csvData.forEach(record => {
      if (record.org_type === 'Stichting') {
        new organisation({
          organisation_name: record.organisation,
          org_type: stiching,
          street: record.street,
          house_number: record.house_number,
          additional_house_number: record.additional_house_number,
          postcode: record.postcode,
          place: record.place,
          country: record.country,
          email: record.organisation_email,
          website: record.website,
        }).save((err, org) => {
          new responsible_person({
            family_name: record.family_name,
            initials: record.initial,
            name_insertion: record.insertion,
            title: record.title,
            email: record.email,
            login_email: record.login_email,
            sex: record.sex,
            role: record.role,
            organisation: org,
          }).save();
        });
      } else if (record.org_type === 'Vereniging') {
        new organisation({
          organisation_name: record.organisation,
          org_type: vereniging,
          street: record.street,
          house_number: record.house_number,
          additional_house_number: record.additional_house_number,
          postcode: record.postcode,
          place: record.place,
          country: record.country,
          email: record.organisation_email,
          website: record.website,
        }).save((err, org) => {
          new responsible_person({
            family_name: record.family_name,
            initials: record.initial,
            name_insertion: record.insertion,
            title: record.title,
            email: record.email,
            login_email: record.login_email,
            sex: record.sex,
            role: record.role,
            organisation: org,
          }).save();
        });
      } else {
        new organisation({
          organisation_name: record.organisation,
          street: record.street,
          house_number: record.house_number,
          additional_house_number: record.additional_house_number,
          postcode: record.postcode,
          place: record.place,
          country: record.country,
          email: record.organisation_email,
          website: record.website,
        }).save((err, org) => {
          new responsible_person({
            family_name: record.family_name,
            initials: record.initial,
            name_insertion: record.insertion,
            title: record.title,
            email: record.email,
            login_email: record.login_email,
            sex: record.sex,
            role: record.role,
            organisation: org,
          }).save();
        });
      }
    });
  })
  .then(() => {
    csvtojson()
      .fromFile('./insinger_data.csv')
      .then(csvData => {
        let temp_project = null;
        csvData.forEach((record, index, arr) => {
          if (record.category === 'diversen') {
            organisation.findOne(
              { organisation_name: record.organisation },
              (err, org) => {
                temp_project = new project({
                  project_number: record.project_id,
                  project_name: record.project,
                  project_description: record.project_description,
                  duration: record.duration,
                  start_date: record.start_date,
                  end_date: record.end_date,
                  total_amount: record.total_amount,
                  decision_date: record.decision_date,
                  decision: record.decision,
                  allocated_amount: record.allocated_amount,
                  released_amount: record.released_amount,
                  paid_amount: record.paid_amount,

                  category: diversen,
                });
                temp_project.organisation.push(org);
                temp_project.save();
              }
            );
          } else if (record.category === 'jeugdwerk') {
            organisation.findOne(
              { organisation_name: record.organisation },
              (err, org) => {
                temp_project = new project({
                  project_number: record.project_id,
                  project_name: record.project,
                  project_description: record.project_description,
                  duration: record.duration,
                  start_date: record.start_date,
                  end_date: record.end_date,
                  total_amount: record.total_amount,
                  decision_date: record.decision_date,
                  decision: record.decision,
                  allocated_amount: record.allocated_amount,
                  released_amount: record.released_amount,
                  paid_amount: record.paid_amount,

                  category: jeugdwerk,
                });
                temp_project.organisation.push(org);
                temp_project.save();
              }
            );
          } else if (record.category === 'restauraties') {
            organisation.findOne(
              { organisation_name: record.organisation },
              (err, org) => {
                temp_project = new project({
                  project_number: record.project_id,
                  project_name: record.project,
                  project_description: record.project_description,
                  duration: record.duration,
                  start_date: record.start_date,
                  end_date: record.end_date,
                  total_amount: record.total_amount,
                  decision_date: record.decision_date,
                  decision: record.decision,
                  allocated_amount: record.allocated_amount,
                  released_amount: record.released_amount,
                  paid_amount: record.paid_amount,

                  category: restauraties,
                });
                temp_project.organisation.push(org);
                temp_project.save();
              }
            );
          } else if (record.category === 'predikantsplaatsen') {
            organisation.findOne(
              { organisation_name: record.organisation },
              (err, org) => {
                temp_project = new project({
                  project_number: record.project_id,
                  project_name: record.project,
                  project_description: record.project_description,
                  duration: record.duration,
                  start_date: record.start_date,
                  end_date: record.end_date,
                  total_amount: record.total_amount,
                  decision_date: record.decision_date,
                  decision: record.decision,
                  allocated_amount: record.allocated_amount,
                  released_amount: record.released_amount,
                  paid_amount: record.paid_amount,

                  category: predikantsplaatsen,
                });
                temp_project.organisation.push(org);
                temp_project.save();
              }
            );
          } else if (record.category === 'Overigen') {
            organisation.findOne(
              { organisation_name: record.organisation },
              (err, org) => {
                temp_project = new project({
                  project_number: record.project_id,
                  project_name: record.project,
                  project_description: record.project_description,
                  duration: record.duration,
                  start_date: record.start_date,
                  end_date: record.end_date,
                  total_amount: record.total_amount,
                  decision_date: record.decision_date,
                  decision: record.decision,
                  allocated_amount: record.allocated_amount,
                  released_amount: record.released_amount,
                  paid_amount: record.paid_amount,

                  category: Overigen,
                });
                temp_project.organisation.push(org);
                temp_project.save();
              }
            );
          }
        });
      });
  });
