import React from 'react';
import { useTitle } from 'react-use';
import { ProjectDetailLayout } from 'app/modules/detail-modules/project-detail/layout';
import { projectMock } from 'app/modules/detail-modules/project-detail/model';

export const ProjectDetailModule = () => {
  useTitle('M&E - Reports');

  return <ProjectDetailLayout {...projectMock} />;
};
