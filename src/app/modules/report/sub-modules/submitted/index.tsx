import React from 'react';
import get from 'lodash/get';
import 'styled-components/macro';
import { Grid, Typography, Box } from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';

interface Props extends RouteComponentProps {
  message: string;
  showGoToBtn: boolean;
}

function SubmittedLayoutF(props: Props) {
  const [reportID, setReportID] = React.useState('');
  // redux actions
  const addReportDataClear = useStoreActions(
    actions => actions.addReport.clear
  );
  // redux data
  const addReportData = useStoreState(state => state.addReport.data);

  React.useEffect(() => {
    if (addReportData) {
      setReportID(get(addReportData, 'data._id', ''));
    }
    return () => addReportDataClear();
  }, []);

  function goToReport() {
    props.history.push(`/reports/${reportID}`);
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      css={`
        text-align: center;
        height: calc(100vh - 100px);
      `}
    >
      <Grid item lg={12} justify="center" alignItems="center">
        <Typography variant="subtitle2">
          {reportID !== '' ? props.message : 'Something went wrong'}
        </Typography>
        <Box width="100%" height="39px" />
        {reportID !== '' && props.showGoToBtn && (
          <ContainedButton text="Go to report" onClick={goToReport} />
        )}
      </Grid>
    </Grid>
  );
}

export const SubmittedLayout = withRouter(SubmittedLayoutF);
