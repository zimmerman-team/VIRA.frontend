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
import {
  getUser,
  getAllUsers,
  addUser,
  deleteUser,
  editUser,
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

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = http.createServer(app);

const IO = socketIO(server);

require('dotenv').config();

IO.sockets.on('connection', (socket: any) => {
  console.log('Client connected...');
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
