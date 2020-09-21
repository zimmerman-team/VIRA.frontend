![CircleCI](https://img.shields.io/circleci/build/github/zimmerman-team/insinger-frontend/develop?label=develop&token=27b31d401501316061ede5b152f153b63ce967b9)
![CircleCI](https://img.shields.io/circleci/build/github/zimmerman-team/insinger-frontend/master?label=master&token=27b31d401501316061ede5b152f153b63ce967b9)
[![Maintainability](https://api.codeclimate.com/v1/badges/f8dd18c30fcbd2396906/maintainability)](https://codeclimate.com/repos/5ebc3e35e429ab6c86006c8d/maintainability)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=zimmerman-zimmerman_insinger-frontend&metric=alert_status&token=9678b9e8e6a13130aa5ec4bc1595ba7940b6f288)](https://sonarcloud.io/dashboard?id=zimmerman-zimmerman_insinger-frontend)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## What is the Insinger Monitoring & Evaluation Tool?

This tool allows you to easily generate reports on the basis of projects that have been co-funded by the Insinger Foundation. After logging in, acces is granted to project information and progress can be reported. These reports allow the Insinger Foundation to monitor the effectiveness of contributions more effectively.
</a>

## About the project

- Website: Private
- Authors: <a href="https://www.zimmerman.team/" target="_blank">Zimmerman</a>

* License: AGPLv3

- Github Frontend Repo: <a href="https://github.com/zimmerman-zimmerman/insinger-frontend" target="_blank">github.com/zimmerman-zimmerman/insinger-frontend</a>
- Github Backend Repo: <a href="https://github.com/zimmerman-zimmerman/insinger-backend" target="_blank">github.com/zimmerman-zimmerman/insinger-backend</a>

## Installing

<b>1.</b> Set up the <a href="https://github.com/zimmerman-zimmerman/insinger-frontend" target="_blank">insinger-frontend</a> first<br/>
<b>2.</b> Checkout this repository to a local folder<br/>
<b>3.</b> Make sure you've installed node.js 10.16.3 or higher<br/>
<b>4.</b> Run `yarn install` <br/>
<b>5.</b> Create an .env file and specify the following variables:

- REACT_APP_PROJECT_URL=http://localhost:3000
- REACT_APP_AUTH_CUSTOM_DOMAIN=<REACT_APP_AUTH_CUSTOM_DOMAIN>
- REACT_APP_AUTH_DOMAIN=<REACT_APP_AUTH_DOMAIN>
- REACT_APP_CLIENT_ID=<REACT_APP_CLIENT_ID>
- REACT_APP_AE_API_CLIENT_ID=<REACT_APP_AE_API_CLIENT_ID>
- REACT_APP_AE_API_CLIENT_SECRET=<REACT_APP_AE_API_CLIENT_SECRET>
- REACT_APP_AE_API_URL=<REACT_APP_AE_API_URL>

## Running the application

To be able to properly run the application you will need to set the following environment variables

- REACT_APP_BACKEND_PORT=<REACT_APP_BACKEND_PORT>
- REACT_APP_PROJECT_URL=<REACT_APP_PROJECT_URL>
- REACT_APP_BACKEND_URL=<REACT_APP_BACKEND_URL>
- REACT_APP_MONGO_DB_URL=<REACT_APP_MONGO_DB_URL>

After you've correctly set the enviroment variables you can run `yarn start`
