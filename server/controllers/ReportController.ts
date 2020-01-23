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
        res.send(err);
      }
      res.json({
        data: reports,
      });
    });
}

// get report by id
export function getReport(req: any, res: any) {
  const { id } = req.query;

  Report.findById(id)
    .populate('location')
    .populate('target_beneficiaries')
    .populate('policy_priorities')
    .exec((err: any, report: any) => {
      if (err) {
        res.send(err);
      }
      res.json({
        data: report,
      });
    });
}

// add report
export function addReport(req: any, res: any) {
  const data = req.query;

  Project.findById(data.project, (err: any, project: any) => {
    if (err) {
      res.send(err);
    }
    targetBeneficiary
      .find({
        _id: {
          $in: data.target_beneficiaries.map((item: any) =>
            mongoose.Types.ObjectId(item)
          ),
        },
      })
      .exec((err: any, tb: any) => {
        if (err) {
          res.send(err);
        }
        policyPriority
          .find({
            _id: {
              $in: data.policy_priorities.map((item: any) =>
                mongoose.Types.ObjectId(item)
              ),
            },
          })
          .exec((err: any, pp: any) => {
            if (err) {
              res.send(err);
            }
            Location.findOne({
              long: data.location.long,
              lat: data.location.lat,
            }).exec((err: any, l: any) => {
              let location = null;
              if (err) {
                location = new Location({
                  long: data.location.long,
                  lat: data.location.lat,
                });
              } else {
                location = l;
              }
              let report = new Report();
              report.project = project;
              report.location = location;
              report.country = data.country;
              report.target_beneficiaries = tb;
              report.policy_priorities = pp;
              report.total_target_beneficiaries =
                data.total_target_beneficiaries;
              report.media = data.media;
              report.key_outcomes = data.key_outcomes;
              report.monitor_report_outcomes = data.monitor_report_outcomes;
              // report.media = data.media; // *** upload file and then store path here ***
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
          });
      });
  });
}

// update report
export function updateReport(req: any, res: any) {
  const { data } = req.query;
  Report.findById(req.params._id, (err: any, found_report: any) => {
    if (err) {
      res.json(err);
    } else if (found_report) {
      targetBeneficiary
        .find({
          _id: {
            $in: data.target_beneficiaries.map((item: any) =>
              mongoose.Types.ObjectId(item)
            ),
          },
        })
        .exec((err: any, tb: any) => {
          if (err) {
            res.send(err);
          }
          policyPriority
            .find({
              _id: {
                $in: data.policy_priorities.map((item: any) =>
                  mongoose.Types.ObjectId(item)
                ),
              },
            })
            .exec((err: any, pp: any) => {
              if (err) {
                res.send(err);
              }
              Location.find({
                long: data.location.long,
                lat: data.location.lat,
              }).exec((err: any, l: any) => {
                let location = null;
                if (err) {
                  location = new Location({
                    long: data.location.long,
                    lat: data.location.lat,
                  });
                } else {
                  location = l;
                }
                found_report.project = Project;
                found_report.location = location;
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
                    res.json(err);
                  }
                  if (err) {
                    res.json(err);
                  }
                  res.json({
                    status: 'success',
                    data: found_report,
                  });
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
