/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { ProjectPalette } from 'app/theme';
import { MediaModel } from 'app/modules/report/model';

export interface AddMediaParams {
  name: string;
  items: MediaModel;
  onClose: Function;
  onChange: Function;
  onSaveMedia: Function;
}

interface AddMediaNavItemParams {
  text: string;
  onClick: Function;
  active: boolean;
}

export const AddMediaNavItem = (props: AddMediaNavItemParams) => (
  <div
    onClick={() => props.onClick(props.text.toLowerCase())}
    css={`
      cursor: pointer;
      padding: 0 15px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.71;
      letter-spacing: 1.25px;
      color: ${ProjectPalette.common.white};
      background: ${props.active
        ? ProjectPalette.secondary.main
        : 'transparent'};
    `}
  >
    {props.text}
  </div>
);

export const AddMediaNavContainer = (props: {
  selectedTab: string;
  onClick: Function;
}) => (
  <div
    css={`
      background-color: #20293c;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 300px;
      height: 35px;
      padding: 5px;
    `}
  >
    <AddMediaNavItem
      text="Document"
      active={props.selectedTab === 'document'}
      onClick={props.onClick}
    />
    <AddMediaNavItem
      text="Video"
      active={props.selectedTab === 'video'}
      onClick={props.onClick}
    />
    <AddMediaNavItem
      text="Picture"
      active={props.selectedTab === 'picture'}
      onClick={props.onClick}
    />
  </div>
);

export interface AddMediaButtonParams {
  text: string;
  onClick: Function;
}

export const AddMediaButton = (props: AddMediaButtonParams) => (
  <div
    onClick={() => props.onClick()}
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

export const AddMediaInputField = (props: { text: string }) => (
  <Grid
    item
    lg={12}
    css={`
      display: flex;
      border: solid 1px #30c2b0;
      background-color: #20293c;
      height: 35px;
      justify-content: flex-start;
      align-items: center;
      color: ${ProjectPalette.common.white};
      margin-bottom: 12px;
      font-size: 12px;
      line-height: 1.33;
      letter-spacing: 0.42px;
      padding-left: 10px;
      overflow: hidden;
    `}
  >
    {props.text}
  </Grid>
);

export const AddMediaInputFieldLabel = (props: { text: string }) => (
  <Grid
    item
    lg={12}
    css={`
      font-size: 17px;
      font-weight: 300;
      color: #ffffff;
      height: 35px;
      text-transform: capitalize;
    `}
  >
    {props.text}
  </Grid>
);

export const AddMediaBigButton = (props: {
  text: string;
  onChange: Function;
}) => {
  const getAcceptString = () => {
    if (props.text === 'picture') {
      return 'image/*';
    }
    if (props.text === 'video') {
      return 'video/*';
    }
    if (props.text === 'document') {
      return 'application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf';
    }
    return '';
  };

  return (
    <>
      <label
        htmlFor="file-input"
        css={`
          display: flex;
          justify-content: center;
        `}
      >
        <div
          css={`
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #20293c;
            width: 300px;
            height: 250px;
            font-size: 16px;
            font-weight: 300;
            line-height: 1.5;
            letter-spacing: 0.5px;
            color: ${ProjectPalette.common.white};
          `}
        >
          Add {props.text}
        </div>
      </label>
      <input
        id="file-input"
        css={`
          display: none;
        `}
        multiple
        type="file"
        name="file"
        accept={getAcceptString()}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.onChange(e, props.text)
        }
      />
    </>
  );
};

export interface AddMediaCloseButtonParams {
  onClick: Function;
}

export const AddMediaCloseButton = (props: AddMediaCloseButtonParams) => (
  <div
    onClick={() => props.onClick()}
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
