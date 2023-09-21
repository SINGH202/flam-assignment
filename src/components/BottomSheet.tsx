import { useState } from "react";
import { BottomSheetProps, TextButtonStatus } from "../../types";
import { TextButton } from "./TextButton";

export const BottomSheet = ({
  fullOpen,
  halfOpen,
  isHalfOpen,
  isFullOpen,
  close,
  isOpen,
}: BottomSheetProps) => {
  //   const [isOpen, setIsOpen] = useState(false);
  const handleFullOpen = () => {
    fullOpen();
    // setIsOpen(true);
  };

  const handleHalfOpen = () => {
    halfOpen();
    // setIsOpen(true);
  };

  const handleClose = () => {
    // setIsOpen(false);
    close();
  };
  return (
    <div
      className={`flex flex-col p-2 z-20 w-full bg-black rounded-t-2xl max-w-5xl mx-auto box-shadow thing ${
        isHalfOpen
          ? "halfOpen"
          : isFullOpen
          ? "fullOpen"
          : isOpen
          ? "isOpen"
          : "close"
      }`}>
      <div className="flex items-center justify-center gap-5">
        <div className="w-24">
          <TextButton
            status={
              isFullOpen ? TextButtonStatus.SECONDARY : TextButtonStatus.PRIMARY
            }
            label={"Full Open"}
            action={handleFullOpen}
          />
        </div>
        <div className="w-24">
          <TextButton
            status={
              isHalfOpen ? TextButtonStatus.SECONDARY : TextButtonStatus.PRIMARY
            }
            label={"Half Open"}
            action={handleHalfOpen}
          />
        </div>
        <div className="w-24">
          <TextButton label={"Close"} action={handleClose} />
        </div>
      </div>

      <div
        className={`flex items-center justify-center text-lg py-2 my-1 h-full bg-gradient-to-b from-yellow-50 to-red-300 rounded-lg`}>
        <span>Sample text</span>
      </div>
    </div>
  );
};
