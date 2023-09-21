export enum TextButtonStatus {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export type TextButtonProps = {
  label: string;
  action: () => void;
  status?: TextButtonStatus;
};

export type BottomSheetProps = {
  isOpen: boolean;
  close: () => void;
  isHalfOpen: boolean;
  halfOpen: () => void;
  isFullOpen: boolean;
  fullOpen: () => void;
};
