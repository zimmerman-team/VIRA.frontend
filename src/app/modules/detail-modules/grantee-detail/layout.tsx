// @ts-nocheck
import React from 'react';

import { ContactsCard } from 'app/components/surfaces/Cards/ContactsCard';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { Description } from 'app/modules/common/components/DescriptionParams';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { PageLoader } from 'app/modules/common/page-loader';
import { getNavTabItems } from 'app/modules/landing/utils/getNavTabItems';
import { GranteeParams } from 'app/modules/detail-modules/grantee-detail/mock';
import { Box, Grid } from '@material-ui/core';
import { css } from 'styled-components/macro';
import { ListModule } from 'app/modules/list-module';
import { TabNavMockList } from 'app/modules/landing/statsMock';
import { useTranslation } from 'react-i18next';

import { bubbleMockData } from 'app/components/charts/Bubble/mock';
import { Viztabs } from 'app/modules/common/components/Viztabs';

export const GranteeDetailLayout = (props: GranteeParams) => {
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
      {props.loading && <PageLoader />}
      {/* ---------------------------------------------------------------------*/}
      {/* breadcrumbs */}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <BreadCrumbs {...props.breadcrumbs} />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* title fragment */}
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        direction="column"
      >
        <TitleFragment {...props.title} />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* project description */}
      <Grid item xs={12} lg={6}>
        <Description {...props.description} />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* charts */}
      <Viztabs
        barChartData={props.ppVizData}
        barChartLegends={props.barChartLegends}
        onBarChartLegendClick={props.onBarChartLegendClick}
        bubbleChartData={{ ...bubbleMockData, children: props.SDGVizData }}
        selectedBubble={props.selectedSDG}
        onBubbleSelect={props.onBubbleSelect}
        geoMapData={props.geoMapData}
      />

      {/* ---------------------------------------------------------------------*/}
      {/* projects */}

      <Box width="100%" height="50px" />
      <ListModule hideGrantees tabNav={getNavTabItems(TabNavMockList, 'viz')} />
    </React.Fragment>
  );
};
