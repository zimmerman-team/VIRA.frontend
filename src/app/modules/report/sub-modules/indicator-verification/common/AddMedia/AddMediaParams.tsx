import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

export interface AddMediaParams {
  name: string;
  items: string[];
}
interface AddMediaNavItemParams {
  text: string;
}
export const AddMediaNavItem = (props: AddMediaNavItemParams) => (
  <div
    css={`
      color: white;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.71;
      letter-spacing: 1.25px;
      cursor: pointer;
    `}
  >
    {props.text}
  </div>
);
export const AddMediaNavContainer = () => (
  <div
    css={`
      background-color: #20293c;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 300px;
      height: 35px;
      padding: 5px;
      padding-left: 15px;
      padding-right: 15px;
    `}
  >
    <AddMediaNavItem text="Label" />
    <AddMediaNavItem text="Video" />
    <AddMediaNavItem text="Picture" />
  </div>
);
export interface AddMediaButtonParams {
  text: string;
}
export const AddMediaButton = (props: AddMediaButtonParams) => (
  <div
    css={`
      font-size: 14px;
      font-weight: 600;
      line-height: 1.71;
      letter-spacing: 1.25px;
      color: white;
      width: 112px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #30c2b0;
      cursor: pointer;
    `}
  >
    {props.text}
  </div>
);
export const AddMediaInputField = () => (
  <Grid
    item
    lg={10}
    css={`
      display: flex;
      border: solid 1px #30c2b0;
      background-color: #20293c;
      height: 35px;
      justify-content: flex-start;
      align-items: center;
      color: white;
      font-size: 12px;
      line-height: 1.33;
      letter-spacing: 0.42px;
      padding-left: 10px;
    `}
  >
    1939u8r482391
  </Grid>
);
export const AddMediaInputFieldLabel = () => (
  <Grid
    item
    lg={12}
    css={`
      font-size: 17px;
      font-weight: 300;
      color: #ffffff;
      height: 35px;
    `}
  >
    Picture
  </Grid>
);

export const AddMediaBigButton = () => (
  <div
    css={`
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #20293c;
      width: 300px;
      height: 260px;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.5;
      letter-spacing: 0.5px;
      color: white;
    `}
  >
    Add Picture
  </div>
);

export const AddMediaCloseButton = () => (
  <div
    css={`
      width: 20px;
      height: 20px;
      background-color: #657d95;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    `}
  >
    <CloseIcon fontSize="small" />
  </div>
);

export const AddMediaTitle = () => (
  <Typography
    css={`
      color: white;
      font-size: 20px;
      font-weight: 300;
    `}
  >
    Add Media
  </Typography>
);
