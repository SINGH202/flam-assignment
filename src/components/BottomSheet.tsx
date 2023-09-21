import { string } from "prop-types";
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
  let sheetState = isHalfOpen
    ? "halfOpen"
    : isFullOpen
    ? "fullOpen"
    : isOpen
    ? "open"
    : "close";

  return (
    <div
      className={`flex flex-col p-2 z-20 w-full bg-black rounded-t-2xl max-w-5xl mx-auto box-shadow bottom-sheet ${sheetState}`}>
      <div className="flex items-center justify-center gap-2 sm:gap-5 max-w-md mx-auto w-full">
        <TextButton
          status={
            isFullOpen ? TextButtonStatus.SECONDARY : TextButtonStatus.PRIMARY
          }
          label={"Full Open"}
          action={fullOpen}
        />
        <TextButton
          status={
            isHalfOpen ? TextButtonStatus.SECONDARY : TextButtonStatus.PRIMARY
          }
          label={"Half Open"}
          action={halfOpen}
        />
        <TextButton label={"Close"} action={close} />
      </div>

      <div
        className={`flex items-center justify-center text-lg sm:text-2xl font-mono py-2 my-1 h-full bg-gradient-to-b from-yellow-50 to-red-300 rounded-lg`}>
        <span>Sample text</span>
      </div>
    </div>
  );
};
