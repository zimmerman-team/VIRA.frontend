const Project = require('../models/project');
const project_categroy = require('../models/project_categroy');
const organisation = require('../models/Org');

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

//get one project

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

//add a project

export function addProject(req: any, res: any) {
  project_categroy.findOne(
    { name: req.query.category },
    (err: any, category: any) => {
      if (category) {
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
        //save project

        project.save((err: any, project: any) => {
          if (err) {
            res(JSON.stringify({ status: 'error', message: err.message }));
          }
          organisation.findOne(
            { organisation_name: req.query.organisation },
            (err: any, org: any) => {
              project.organisation = org;
              project.save((err: any, project: any) => {
                if (err) {
                  res(
                    JSON.stringify({ status: 'error', message: err.message })
                  );
                }
                res(
                  JSON.stringify({
                    message: 'new project successfully created.',
                    data: project,
                  })
                );
              });
            }
          );
        });
      } else if (!category) {
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

        //save project

        project.save((err: any, project: any) => {
          if (err) {
            res(JSON.stringify({ status: 'error', message: err.message }));
          }
          organisation.findOne(
            { organisation_name: req.query.organisation },
            (err: any, org: any) => {
              project.organisation = org;
              project.save((err: any, project: any) => {
                if (err) {
                  res(
                    JSON.stringify({ status: 'error', message: err.message })
                  );
                }
                res(
                  JSON.stringify({
                    message: 'new project successfully created.',
                    data: project,
                  })
                );
              });
            }
          );
        });
      }
    }
  );
}

//update project

export function UpdateProject(req: any, res: any) {
  Project.findById(req.query.id, (err: any, found_project: any) => {
    if (err) {
      res.json(err);
    } else if (found_project) {
      found_project.project_number = req.query.project_number;
      found_project.project_name = req.query.project_name;
      found_project.project_description = req.query.project_description;
      found_project.duration = req.query.duration;
      found_project.start_date = req.query.start_date;
      found_project.end_date = req.query.end_date;
      found_project.total_amount = req.query.total_amount;
      found_project.decision_date = req.query.decision_date;
      found_project.decision = req.query.decision;
      found_project.allocated_amount = req.query.allocated_amount;
      found_project.released_amount = req.query.released_amount;
      found_project.paid_amount = req.query.paid_amount;
      found_project.organisation = req.query.organanisation;

      found_project.save((err: any) => {
        if (err) {
          res(JSON.stringify({ status: 'error', message: err.message }));
        }
        res(JSON.stringify({ status: 'success', data: found_project }));
      });
    } else {
      res(JSON.stringify({ status: 'fail', message: 'project not found' }));
    }
  });
}

//delete

export function DelProject(req: any, res: any) {
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
            status:
              project.deletedCount + ' organisation successfully deleted.',
            message: project,
          })
        );
      }
    }
  );
}
