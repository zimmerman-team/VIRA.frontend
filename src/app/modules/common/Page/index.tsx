// @ts-nocheck
/* core */
import React, { ReactNode } from 'react';
import useTitle from 'react-use/lib/useTitle';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import styled from 'styled-components/macro';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';

export type PageProps = {
  title?: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbModel;
  children?: ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
};

const GridItem = styled(Grid)`
  height: 100%;
`;
const MainGrid = styled(Grid)`
  height: 100%;
`;
const MainContainer = styled(Container)`
  height: 100vh;
  /* // overflow-y: auto; */
  /* // max-height: 100vh; */
  /* // min-height: 100vh; */
  padding-top: 40px;
`;

const Page = (props: PageProps) => {
  useTitle(`Monitoring & Evaluation Tool  - ${props.title}`);

  return (
    <MainContainer maxWidth={props.maxWidth}>
      <MainGrid container>
        <GridItem item md={12}>
          <Box height="100%" bgcolor="#f7f7f7">
            {props.breadcrumbs && (
              <BreadCrumbs
                currentLocation={props.breadcrumbs.currentLocation}
                previousLocations={props.breadcrumbs.previousLocations}
              />
            )}
            {props.title && (
              <Typography
                variant="h3"
                css={`
                  && {
                    padding-top: 24px;
                    margin-bottom: 48px;
                  }
                `}
              >
                {props.title}
              </Typography>
            )}
            {props.subtitle && (
              <React.Fragment>
                <Typography variant="subtitle2">{props.subtitle}</Typography>
                <Box width="100%" height="24px" />
              </React.Fragment>
            )}
            {props.children}
          </Box>
        </GridItem>
      </MainGrid>
    </MainContainer>
  );
};

export default Page;
