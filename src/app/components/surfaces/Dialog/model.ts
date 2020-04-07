export type DialogBtnType = {
  text: string;
  color: string;
  action: any;
  background: string;
  closeOnClick: boolean;
};

export type DialogProps = {
  title: string;
  open: boolean;
  content?: any;
  buttons?: DialogBtnType[];
  onClose?: Function;
};
