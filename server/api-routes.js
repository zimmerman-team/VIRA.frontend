let router = require('express').Router();
const orgController = require('./controllers/OrgController');
const projectController = require('./controllers/ProjectController');
const orgTypeController = require('./controllers/OrgTypeController');
const projectCategoryController = require('./controllers/ProjectCategoryController.ts');
const responsiblePersonController = require('./controllers/ResponsiblePersonController');

router.get('/', (req, res) => {
  res.json({ status: 200, message: 'api working' });
});

router
  .route('/organisation')
  .get(orgController.allOrg)
  .post(orgController.AddOrg);

router
  .route('/organisation/:_id')
  .get(orgController.oneOrg)
  .put(orgController.UpdateOrg)
  .delete(orgController.DelOrg);

router
  .route('/project')
  .get(projectController.allProject)
  .post(projectController.addProject);

router
  .route('/project/:_id')
  .get(projectController.oneProject)
  .put(projectController.UpdateProject)
  .delete(projectController.DelProject);

router
  .route('/org_type')
  .get(orgTypeController.allOrgType)
  .post(orgTypeController.addOrgType);

router
  .route('/org_type/:_id')
  .get(orgTypeController.oneOrgType)
  .put(orgTypeController.UpdateOrgType)
  .delete(orgTypeController.DelOrgType);

router
  .route('/project_category')
  .get(projectCategoryController.allProjectCategory)
  .post(projectCategoryController.addProjectCategory);

router
  .route('/project_category/:_id')
  .get(projectCategoryController.oneProjectCategory)
  .put(projectCategoryController.UpdateProjectCategory)
  .delete(projectCategoryController.DelProjectCategory);

router
  .route('/responsible_person')
  .get(responsiblePersonController.allPerson)
  .post(responsiblePersonController.AddPerson);

router
  .route('/responsible_person/:_id')
  .get(responsiblePersonController.onePeron)
  .put(responsiblePersonController.UpdatePerson)
  .delete(responsiblePersonController.DelPerson);

module.exports = router;