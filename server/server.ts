const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const helmet = require('helmet');
let apiRouter = require('./api-routes');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let url = 'mongodb://localhost:27017/insinger';
const router = express.Router();
const orgController = require('./controllers/OrgControllerSocket');
const orgTypeController = require('./controllers/OrgTypeControllerSocket');
const projectCategoryController = require('./controllers/ProjectCategoryControllerSocket');
const projectController = require('./controllers/ProjectControllerSocket');
const responsiblePersonController = require('./controllers/ResponsiblePersonControllerSocket');
import {
  getUser,
  getAllUsers,
  addUser,
  deleteUser,
  editUser,
  getAuth0DBConnection,
} from './controllers/AuthUserController';
import {
  getUserGroup,
  getUserGroups,
  addUserToGroup,
  getGroup,
  addGroup,
  editGroup,
  deleteGroup,
} from './controllers/AuthGroup';
import {
  getUserRole,
  getUserRoles,
  assignRoleToUser,
} from './controllers/AuthRole';
import { sendForgetPasswordEmail } from './utils/auth';
import { generalSearchSocketAPI } from './controllers/SearchController';

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = http.createServer(app);

const IO = socketIO(server);

require('dotenv').config();

IO.sockets.on('connection', (socket: any) => {
  // console.log('Client connected...');
  /* User */
  socket.on('getUser', (data: any, fn: any) => {
    getUser({ query: data }, (res: any) => fn(res));
  });
  socket.on('getAllUsers', (data: any, fn: any) => {
    getAllUsers({ query: data }, (res: any) => fn(res));
  });
  socket.on('addUser', (data: any, fn: any) => {
    addUser({ query: data }, (res: any) => fn(res));
  });
  socket.on('deleteUser', (data: any, fn: any) => {
    deleteUser({ query: data }, (res: any) => fn(res));
  });
  socket.on('editUser', (data: any, fn: any) => {
    editUser({ query: data }, (res: any) => fn(res));
  });
  socket.on('sendForgetPasswordEmail', (data: any, fn: any) => {
    sendForgetPasswordEmail({ query: data }, (res: any) => fn(res));
  });
  socket.on('getAuth0DBConnection', (data: any, fn: any) => {
    getAuth0DBConnection({ query: data }, (res: any) => fn(res));
  });
  /* Group */
  socket.on('getUserGroup', (data: any, fn: any) => {
    getUserGroup({ query: data }, (res: any) => fn(res));
  });
  socket.on('getUserGroups', (data: any, fn: any) => {
    getUserGroups({ query: data }, (res: any) => fn(res));
  });
  socket.on('addUserToGroup', (data: any, fn: any) => {
    addUserToGroup({ query: data }, (res: any) => fn(res));
  });
  socket.on('getGroup', (data: any, fn: any) => {
    getGroup({ query: data }, (res: any) => fn(res));
  });
  socket.on('addGroup', (data: any, fn: any) => {
    addGroup({ query: data }, (res: any) => fn(res));
  });
  socket.on('editGroup', (data: any, fn: any) => {
    editGroup({ query: data }, (res: any) => fn(res));
  });
  socket.on('deleteGroup', (data: any, fn: any) => {
    deleteGroup({ query: data }, (res: any) => fn(res));
  });
  /* Role */
  socket.on('getUserRole', (data: any, fn: any) => {
    getUserRole({ query: data }, (res: any) => fn(res));
  });
  socket.on('getUserRoles', (data: any, fn: any) => {
    getUserRoles({ query: data }, (res: any) => fn(res));
  });
  socket.on('assignRoleToUser', (data: any, fn: any) => {
    assignRoleToUser({ query: data }, (res: any) => fn(res));
  });
  /* Grantee */
  socket.on('allOrg', (data: any, fn: any) => {
    orgController.allOrg({ query: data }, (res: any) => fn(res));
  });
  socket.on('oneOrg', (data: any, fn: any) => {
    orgController.oneOrg({ query: data }, (res: any) => fn(res));
  });
  socket.on('addOrg', (data: any, fn: any) => {
    orgController.AddOrg({ query: data }, (res: any) => fn(res));
  });
  socket.on('updateOrg', (data: any, fn: any) => {
    orgController.UpdateOrg({ query: data }, (res: any) => fn(res));
  });
  socket.on('delOrg', (data: any, fn: any) => {
    orgController.DelOrg({ query: data }, (res: any) => fn(res));
  });
  socket.on('allOrgType', (data: any, fn: any) => {
    orgTypeController.allOrgType({ query: data }, (res: any) => fn(res));
  });
  socket.on('oneOrgType', (data: any, fn: any) => {
    orgTypeController.oneOrgType({ query: data }, (res: any) => fn(res));
  });
  socket.on('addOrgType', (data: any, fn: any) => {
    orgTypeController.addOrgType({ query: data }, (res: any) => fn(res));
  });
  socket.on('updateOrgType', (data: any, fn: any) => {
    orgTypeController.UpdateOrgType({ query: data }, (res: any) => fn(res));
  });
  socket.on('delOrgType', (data: any, fn: any) => {
    orgTypeController.DelOrgType({ query: data }, (res: any) => fn(res));
  });
  /* Project */
  socket.on('allProjectCategory', (data: any, fn: any) => {
    projectCategoryController.allProjectCategory({ query: data }, (res: any) =>
      fn(res)
    );
  });
  socket.on('oneProjectCategory', (data: any, fn: any) => {
    projectCategoryController.oneProjectCategory({ query: data }, (res: any) =>
      fn(res)
    );
  });
  socket.on('addProjectCategory', (data: any, fn: any) => {
    projectCategoryController.addProjectCategory({ query: data }, (res: any) =>
      fn(res)
    );
  });
  socket.on('updateProjectCategory', (data: any, fn: any) => {
    projectCategoryController.UpdateProjectCategory(
      { query: data },
      (res: any) => fn(res)
    );
  });
  socket.on('delProjectCategory', (data: any, fn: any) => {
    projectCategoryController.DelProjectCategory({ query: data }, (res: any) =>
      fn(res)
    );
  });
  socket.on('allProject', (data: any, fn: any) => {
    projectController.allProject({ query: data }, (res: any) => fn(res));
  });
  socket.on('oneProject', (data: any, fn: any) => {
    projectController.oneProject({ query: data }, (res: any) => fn(res));
  });
  socket.on('addProject', (data: any, fn: any) => {
    projectController.addProject({ query: data }, (res: any) => fn(res));
  });
  socket.on('updateProject', (data: any, fn: any) => {
    projectController.UpdateProject({ query: data }, (res: any) => fn(res));
  });
  /* Responsible person */
  socket.on('delProject', (data: any, fn: any) => {
    projectController.DelProject({ query: data }, (res: any) => fn(res));
  });
  socket.on('allPerson', (data: any, fn: any) => {
    responsiblePersonController.allPerson({ query: data }, (res: any) =>
      fn(res)
    );
  });
  socket.on('onePerson', (data: any, fn: any) => {
    responsiblePersonController.onePeron({ query: data }, (res: any) =>
      fn(res)
    );
  });
  socket.on('addPerson', (data: any, fn: any) => {
    responsiblePersonController.AddPerson({ query: data }, (res: any) =>
      fn(res)
    );
  });
  socket.on('updatePerson', (data: any, fn: any) => {
    responsiblePersonController.UpdatePerson({ query: data }, (res: any) =>
      fn(res)
    );
  });
  socket.on('delPerson', (data: any, fn: any) => {
    responsiblePersonController.DelPerson({ query: data }, (res: any) =>
      fn(res)
    );
  });
  /* General search */
  socket.on('search', (data: any, fn: any) => {
    generalSearchSocketAPI({ query: data }, (res: any) => fn(res));
  });
});

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
if (!db) {
  console.log('Error connecting to database.');
} else {
  console.log('connected to database successfully.');
}

app.use('/api', apiRouter);

server.listen(process.env.REACT_APP_BACKEND_PORT, () =>
  console.log(`LISTENING ON PORT ${process.env.REACT_APP_BACKEND_PORT}`)
);

router.get('/redirectToHome', (req: any, res: any) => {
  res.redirect(`${process.env.REACT_APP_PROJECT_URL}/`);
});
app.use('/api', router);

export {};
