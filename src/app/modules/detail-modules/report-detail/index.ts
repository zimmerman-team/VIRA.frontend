import React, { useState } from 'react';
import get from 'lodash/get';
import { useTitle } from 'react-use';
import { useParams } from 'react-router-dom';
import { ReportDetailLayout } from 'app/modules/detail-modules/report-detail/layout';

export const ReportDetailModule = (props: any) => {
  // @ts-ignore
  const projectNumber: any = useParams();
  console.log(projectNumber);
  return ReportDetailLayout;
};
