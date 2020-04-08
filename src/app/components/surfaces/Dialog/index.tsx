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
    >
      <DialogTitle
        css={`
          font-size: 20px;
        `}
        id="dialog-title"
      >
        {props.title}
      </DialogTitle>
      <div
        css={`
          width: 100%;
          height: 15px;
        `}
      />
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
                css={`
                  font-size: 16px;
                  min-width: 140px;
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
