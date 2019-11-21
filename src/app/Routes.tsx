//cc:application base#;application routes

import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageLoader } from 'app/modules/common/page-loader';
import { NoMatchPage } from 'app/modules/common/no-match-page';
import LandingLayout from 'app/modules/landing';
import About from 'app/modules/about';
import { ProjectsModule } from 'app/modules/projects';

export function MainRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/">
          <LandingLayout />
        </Route>

        <Route exact path="/projects">
          <ProjectsModule />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/notFound">
          <NoMatchPage />
        </Route>
      </Switch>
    </Suspense>
  );
}
