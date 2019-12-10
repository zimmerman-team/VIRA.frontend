let router = require('express').Router();
const orgController = require('./controllers/OrgController');

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

module.exports = router;
