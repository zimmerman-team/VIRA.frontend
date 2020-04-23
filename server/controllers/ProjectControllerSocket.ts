const Project = require('../models/project');
import sumBy from 'lodash/sumBy';
import filter from 'lodash/filter';
const Report = require('../models/report');
const ProjectCat = require('../models/project_categroy');
const Organisation = require('../models/Org');

// get all projects
export function allProject(req: any, res: any) {
  if (!req.query.project_number) {
    Project.get((err: any, project: any) => {
      if (err) {
        res(JSON.stringify({ status: 'error', message: err.message }));
      }

      Project.populate(
        project,
        {
          path: 'organisation',
          select: 'organisation_name', //org name and category name
          match: req.query.organisation_name
            ? {
                organisation_name: {
                  $in: req.query.organisation_name.split(','),
                },
              }
            : {},
        },
        (err: any, data: any) => {
          res(
            JSON.stringify({
              data: data.filter((projects: any) => {
                return projects.organisation != null;
              }),
            })
          );
        }
      );
    });
  } else {
    Project.find(
      { project_number: req.query.project_number.split(',') },
      (err: any, projects: any) => {
        Project.populate(
          //first populate for organisation.
          projects,
          {
            path: 'organisation ',
            select: 'organisation_name ', //org name
            match: req.query.organisation_name
              ? {
                  organisation_name: {
                    $in: req.query.organisation_name.split(','),
                  },
                }
              : {},
          },
          (err: any, projects: any) => {
            //callback from first populate()
            Project.populate(
              // second populate for category
              projects,
              {
                path: 'category',
                select: 'name',
              },
              (err: any, data: any) => {
                //callback from second populate()
                res(
                  JSON.stringify({
                    data: data.filter((projects: any) => {
                      return projects.organisation != null;
                    }),
                  })
                );
              }
            );
          }
        );
      }
    );
  }
}

// get a project
export function oneProject(req: any, res: any) {
  Project.findById(req.query.id)
    .populate('category', 'name')
    .populate('organisation', 'organisation_name')
    .exec((err: any, project: any) => {
      if (err) {
        res(JSON.stringify({ status: 'error', message: err.message }));
      }
      res(JSON.stringify({ data: project }));
    });
}

async function getProjectCategory(name: string) {
  return new Promise((resolve, reject) => {
    if (name) {
      ProjectCat.findOne({
        name: name,
      }).exec((err: any, category: any) => {
        if (!category) {
          new ProjectCat({
            name: name,
            description: name,
          }).save((err: any, newCategory: any) => {
            resolve(newCategory);
          });
        } else {
          resolve(category);
        }
      });
    } else {
      resolve(null);
    }
  });
}

async function getOrganisation(id: string) {
  return new Promise((resolve, reject) => {
    if (id) {
      Organisation.findById(id, (err: any, organisation: any) => {
        resolve(organisation);
      });
    } else {
      resolve(null);
    }
  });
}

// add a project
export function addProject(req: any, res: any) {
  getProjectCategory(req.query.category).then(category => {
    getOrganisation(req.query.orgId).then(organisation => {
      let project = new Project();
      project.project_number = req.query.project_number;
      project.project_name = req.query.project_name;
      project.project_description = req.query.project_description;
      project.duration = req.query.duration;
      project.start_date = req.query.start_date;
      project.end_date = req.query.end_date;
      project.total_amount = req.query.total_amount;
      project.decision_date = req.query.decision_date;
      project.decision = req.query.decision;
      project.allocated_amount = req.query.allocated_amount;
      project.released_amount = req.query.released_amount;
      project.paid_amount = req.query.paid_amount;
      project.category = category;
      project.organisation = organisation;
      project.save((err: any, project: any) => {
        if (err) {
          res(JSON.stringify({ status: 'error', message: err.message }));
        } else {
          res(
            JSON.stringify({
              message: 'new project successfully created.',
              data: project,
            })
          );
        }
      });
    });
  });
}

// edit a project
export function editProject(req: any, res: any) {
  Project.findById(req.query.id, (err: any, project: any) => {
    if (err) {
      res(JSON.stringify({ status: 'error', message: err.message }));
    } else if (project) {
      getProjectCategory(req.query.category).then(category => {
        getOrganisation(req.query.orgId).then(organisation => {
          project.project_number = req.query.project_number;
          project.project_name = req.query.project_name;
          project.project_description = req.query.project_description;
          project.duration = req.query.duration;
          project.start_date = req.query.start_date;
          project.end_date = req.query.end_date;
          project.total_amount = req.query.total_amount;
          project.decision_date = req.query.decision_date;
          project.decision = req.query.decision;
          project.allocated_amount = req.query.allocated_amount;
          project.released_amount = req.query.released_amount;
          project.paid_amount = req.query.paid_amount;
          project.category = category || project.category;
          project.organisation = organisation || project.organisation;
          project.save((err: any, updProject: any) => {
            if (err) {
              res(JSON.stringify({ status: 'error', message: err.message }));
            } else {
              res(
                JSON.stringify({
                  message: 'project successfully updated.',
                  data: updProject,
                })
              );
            }
          });
        });
      });
    } else {
      res(JSON.stringify({ status: 'error', message: 'project not found' }));
    }
  });
}

// delete a project
export function deleteProject(req: any, res: any) {
  Project.deleteOne(
    {
      _id: req.query.id,
    },
    (err: any, project: any) => {
      if (err) {
        res(JSON.stringify({ status: 'error', message: err.message }));
      } else {
        res(
          JSON.stringify({
            status: 'project successfully deleted.',
            message: project,
          })
        );
      }
    }
  );
}

// get project budget data
export function getProjectBudgetData(req: any, res: any) {
  const { projectID, exludeReportID } = req.query;

  Project.findOne({ project_number: projectID.toString() }).exec(
    (err: any, project: any) => {
      if (err) {
        console.log(err);
        res(JSON.stringify({ status: 'error', message: err.message }));
      }
      if (project) {
        Report.find({ project: project })
          .select('budget')
          .populate('policy_priority')
          .exec((err: any, reports: any) => {
            if (reports) {
              const fReports = exludeReportID
                ? filter(reports, { _id: exludeReportID })
                : reports;
              const totUsedBudget = sumBy(fReports, 'budget');
              res(
                JSON.stringify({
                  status: 'success',
                  data: {
                    totBudget: project.total_amount,
                    remainBudget: project.total_amount - totUsedBudget,
                  },
                })
              );
            }
            res(
              JSON.stringify({
                status: 'success',
                data: {
                  totBudget: project.total_amount,
                  remainBudget: project.total_amount,
                },
              })
            );
          });
      } else {
        res(JSON.stringify({ status: 'error', message: 'Project not found' }));
      }
    }
  );
}
