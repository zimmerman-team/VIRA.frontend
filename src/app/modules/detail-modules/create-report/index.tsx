import React from 'react';
import { withRouter } from 'react-router-dom';
import { CreateReportLayout } from 'app/modules/reports/sub-modules/create-report/layout';
import {
  tabs,
  breadcrumbs,
} from 'app/modules/reports/sub-modules/create-report/mock';
import findIndex from 'lodash/findIndex';

const getTabIndex = (pathname: string) =>
  findIndex(tabs, tab => `/reports/create/${tab.path}` === pathname);

function CreateReportFunc(props: any) {
  const [initialTabIndex, setInitialTabIndex] = React.useState(
    getTabIndex(props.location.pathname)
  );

  React.useEffect(() => {
    setInitialTabIndex(getTabIndex(props.location.pathname));
  }, [props.location.pathname]);

  const onTabChange = (tabIndex: number) => {
    props.history.push(tabs[tabIndex].path);
  };

  const onNextBtnClick = () => {
    const currTabIndex = getTabIndex(props.location.pathname);
    if (currTabIndex !== tabs.length - 1 && currTabIndex > -1) {
      onTabChange(currTabIndex + 1);
    }
  };

  const onBackBtnClick = () => {
    const currTabIndex = getTabIndex(props.location.pathname);
    if (currTabIndex !== tabs.length && currTabIndex > 0) {
      onTabChange(currTabIndex - 1);
    }
  };

  return (
    <CreateReportLayout
      tabs={tabs}
      breadcrumbs={breadcrumbs}
      changeRoute={onTabChange}
      onNextBtnClick={onNextBtnClick}
      onBackBtnClick={onBackBtnClick}
      initialTabIndex={initialTabIndex}
    />
  );
}

export const CreateReport = withRouter(CreateReportFunc);
