const mongoose = require('mongoose');
const Report = require('../models/report');
const Project = require('../models/project');
const Location = require('../models/location');
const policyPriority = require('../models/policyPriority');
const targetBeneficiary = require('../models/targetBeneficiary');

// get all reports or reports of a project
export function getReports(req: any, res: any) {
  const { projectID } = req.query;

  Report.find(projectID ? { project: projectID } : {})
    .populate('location')
    .populate('target_beneficiaries')
    .populate('policy_priorities')
    .exec((err: any, reports: any) => {
      if (err) {
        res(JSON.stringify({ status: 'error', message: err.message }));
      }
      res(JSON.stringify({ status: 'success', data: reports }));
    });
}

// get report by id
export function getReport(req: any, res: any) {
  const { id } = req.query;

  Report.findById(id)
    .populate('location')
    .populate('project')
    .populate('target_beneficiaries')
    .populate('policy_priorities')
    .exec((err: any, report: any) => {
      if (err) {
        res(JSON.stringify({ status: 'error', message: err.message }));
      }
      res(JSON.stringify(report));
    });
}

async function getPolicyPriorities(data: any) {
  return new Promise((resolve, reject) => {
    const result: any = [];
    let count = 0;
    const totalCount = data.length;
    data.forEach((item: any) => {
      policyPriority.findOne({ name: item }).exec((err: any, priority: any) => {
        if (err || !priority) {
          policyPriority.create({ name: item }, (err2: any, priority2: any) => {
            if (err2) {
              console.log('err2', err2);
            } else {
              result.push(priority2);
              count++;
              if (count === totalCount) {
                resolve(result);
              }
            }
          });
        } else {
          result.push(priority);
          count++;
          if (count === totalCount) {
            resolve(result);
          }
        }
      });
    });
  });
}

// add report
export function addReport(req: any, res: any) {
  const { data } = req.query;

  getPolicyPriorities(data.policy_priorities).then(pp => {
    Project.findOne(
      { project_number: data.project },
      (err: any, project: any) => {
        if (err) {
          res(JSON.stringify({ status: 'error', message: err.message }));
        }
        targetBeneficiary.create(
          data.target_beneficiaries,
          (err: any, tb: any) => {
            if (err) {
              res(JSON.stringify({ status: 'error', message: err.message }));
            }
            Location.findOne({
              long: data.location.long,
              lat: data.location.lat,
            }).exec((err: any, l: any) => {
              // let location = null;
              // if (err) {
              //   location = new Location({
              //     long: data.location.long,
              //     lat: data.location.lat,
              //   });
              // } else {
              //   location = l;
              // }
              let report = new Report();
              report.project = project;
              report.title = data.title;
              // report.location = location;
              report.date = new Date().toLocaleDateString();
              report.country = data.country;
              report.target_beneficiaries = tb;
              report.policy_priorities = pp;
              report.total_target_beneficiaries =
                data.total_target_beneficiaries;
              report.key_outcomes = data.key_outcomes;
              report.monitor_report_outcomes = data.monitor_report_outcomes;
              report.media = data.media;
              report.key_implementation_challenges =
                data.key_implementation_challenges;
              report.other_project_outcomes = data.other_project_outcomes;
              report.plans = data.plans;
              report.other_comments = data.other_comments;
              report.save((err: any, report: any) => {
                if (err) {
                  res(
                    JSON.stringify({ status: 'error', message: err.message })
                  );
                }
                res(JSON.stringify({ status: 'success', data: report }));
              });
            });
          }
        );
      }
    );
  });
}

// update report
export function updateReport(req: any, res: any) {
  const data = req.query;
  Report.findById(data._id, (err: any, found_report: any) => {
    if (err) {
      res.json(err);
    } else if (found_report) {
      targetBeneficiary
        .find({
          _id: {
            $in: data.target_beneficiaries
              ? data.target_beneficiaries.map((item: any) =>
                  mongoose.Types.ObjectId(item)
                )
              : [],
          },
        })
        .exec((err: any, tb: any) => {
          if (err) {
            found_report.title = data.title;
            found_report.location = location;
            found_report.date = new Date().toLocaleDateString();
            found_report.total_target_beneficiaries =
              data.total_target_beneficiaries;
            found_report.key_outcomes = data.key_outcomes;
            found_report.monitor_report_outcomes = data.monitor_report_outcomes;
            // report.media = data.media; // *** upload file and then store path here ***
            found_report.key_implementation_challenges =
              data.key_implementation_challenges;
            found_report.other_project_outcomes = data.other_project_outcomes;
            found_report.plans = data.plans;
            found_report.other_comments = data.other_comments;
          }
          policyPriority
            .find({
              _id: {
                $in: data.policy_priorities
                  ? data.policy_priorities.map((item: any) =>
                      mongoose.Types.ObjectId(item)
                    )
                  : [],
              },
            })
            .exec((err: any, pp: any) => {
              if (err) {
                found_report.title = data.title;
                found_report.location = location;
                found_report.date = new Date().toLocaleDateString();
                found_report.total_target_beneficiaries =
                  data.total_target_beneficiaries;
                found_report.key_outcomes = data.key_outcomes;
                found_report.monitor_report_outcomes =
                  data.monitor_report_outcomes;
                // report.media = data.media; // *** upload file and then store path here ***
                found_report.key_implementation_challenges =
                  data.key_implementation_challenges;
                found_report.other_project_outcomes =
                  data.other_project_outcomes;
                found_report.plans = data.plans;
                found_report.other_comments = data.other_comments;
              }
              Location.findOne(
                data.location
                  ? {
                      long: data.location.long,
                      lat: data.location.lat,
                    }
                  : {}
              ).exec((err: any, l: any) => {
                let location = null;
                if (err) {
                  location = new Location({
                    long: data.location.long,
                    lat: data.location.lat,
                  });
                } else {
                  location = l;
                }
                found_report.title = data.title;
                found_report.location = location;
                found_report.date = new Date().toLocaleDateString();
                found_report.target_beneficiaries = tb;
                found_report.policy_priorities = pp;
                found_report.total_target_beneficiaries =
                  data.total_target_beneficiaries;
                found_report.key_outcomes = data.key_outcomes;
                found_report.monitor_report_outcomes =
                  data.monitor_report_outcomes;
                // report.media = data.media; // *** upload file and then store path here ***
                found_report.key_implementation_challenges =
                  data.key_implementation_challenges;
                found_report.other_project_outcomes =
                  data.other_project_outcomes;
                found_report.plans = data.plans;
                found_report.other_comments = data.other_comments;

                found_report.save((err: any, report: any) => {
                  if (err) {
                    res(
                      JSON.stringify({ status: 'error', message: err.message })
                    );
                  }

                  res(JSON.stringify({ status: 'success', data: report }));
                });
              });
            });
        });
    } else {
      res.json({
        status: 'fail',
        message: 'project not found.',
      });
    }
  });
}

// delete report
export function deleteReport(req: any, res: any) {
  Report.deleteOne(
    {
      _id: req.params._id,
    },
    (err: any, report: any) => {
      if (err) {
        res.json(err);
      } else {
        res.json({
          status: 'report successfully deleted',
          message: report,
        });
      }
    }
  );
}
