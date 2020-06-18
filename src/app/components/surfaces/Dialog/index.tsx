/* core */
import React from 'react';
import 'styled-components/macro';
/* third-party */
import Button from '@material-ui/core/Button';
import MuiDialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
/* project-specific */
import {
  DialogProps,
  DialogBtnType,
} from 'app/components/surfaces/Dialog/model';

export const Dialog = (props: DialogProps) => {
  const [open, setOpen] = React.useState(props.open);

  React.useEffect(() => setOpen(props.open), [props.open]);

  const handleClose = () => {
    setOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <MuiDialog
      open={open}
      disableBackdropClick
      disableEscapeKeyDown
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      css={`
        && {
          .MuiBackdrop-root {
            background: rgba(162, 162, 162, 0.1);
          }
          .MuiDialog-paper {
            margin: 0;
            box-shadow: none;
            @media (min-width: 768px) {
              padding: 52px 96px;
            }
            @media (max-width: 767px) {
              width: 364px;
              padding: 42px 56px;
            }
            @media (max-width: 380px) {
              width: calc(100% - 16px);
            }
          }
        }
      `}
    >
      <DialogTitle
        css={`
          padding: 0;
          font-size: 20px;
          text-align: center;
        `}
        id="dialog-title"
      >
        {props.title}
      </DialogTitle>
      {props.content && <DialogContent>{props.content}</DialogContent>}
      {props.buttons && (
        <DialogActions
          css={`
            justify-content: center;
          `}
        >
          {props.buttons.map((button: DialogBtnType) => {
            const onClick = (e: any) => {
              button.action();
              if (button.closeOnClick) {
                handleClose();
              }
            };
            return (
              <Button
                data-cy="dialog-button"
                css={`
                  font-size: 14px;
                  min-width: 140px;
                  padding: 12px 16px;
                  color: ${button.color};
                  text-transform: capitalize;
                  background: ${button.background};
                  &:hover {
                    opacity: 0.7;
                    background: ${button.background};
                  }
                `}
                onClick={onClick}
              >
                {button.text}
              </Button>
            );
          })}
        </DialogActions>
      )}
    </MuiDialog>
  );
};
