const Project = require('../models/project');
const Organisation = require('../models/Org');
const Report = require('../models/report');

export function generalSearchSocketAPI(req: any, res: any) {
  const { q } = req.query;
  let projects: any[] = [];
  let reports: any[] = [];
  let orgs: any[] = [];

  if (q) {
    Project.find({
      project_name: { $regex: q, $options: '-i' },
    }).exec((err: any, projectsResults: any) => {
      if (!err) {
        projects = projectsResults;
      }
      Organisation.find({
        organisation_name: { $regex: q, $options: '-i' },
      }).exec((err: any, orgsResults: any) => {
        if (!err) {
          orgs = orgsResults;
        }
        Report.find({
          title: { $regex: q, $options: '-i' },
        }).exec((err: any, reportResults: any) => {
          if (!err) {
            reports = reportResults;
          }
          return res(
            JSON.stringify({
              data: {
                projects: projects,
                reports: reports,
                organisations: orgs,
              },
            })
          );
        });
      });
    });
  } else {
    res.json({ message: "'q' parameter is not defined" });
    return res(JSON.stringify({ message: "'q' parameter is not defined" }));
  }
}

export function generalSearchAPI(req: any, res: any) {
  const { q } = req.query;
  let projects: any[] = [];
  let reports: any[] = [];
  let orgs: any[] = [];

  if (q) {
    Project.find({
      project_name: { $regex: q, $options: '-i' },
    }).exec((err: any, projectsResults: any) => {
      if (!err) {
        projects = projectsResults;
      }
      Organisation.find({
        organisation_name: { $regex: q, $options: '-i' },
      }).exec((err: any, orgsResults: any) => {
        if (!err) {
          orgs = orgsResults;
        }
        Report.find({
          title: { $regex: q, $options: '-i' },
        }).exec((err: any, reportResults: any) => {
          if (!err) {
            reports = reportResults;
          }
          res.json({
            data: {
              projects: projects,
              reports: reports,
              organisations: orgs,
            },
          });
        });
      });
    });
  } else {
    res.json({ message: "'q' parameter is not defined" });
  }
}
