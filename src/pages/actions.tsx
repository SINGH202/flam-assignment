import { BottomSheet } from "@/components/BottomSheet";
import { TextButton } from "@/components/TextButton";
import { useState } from "react";

export default function Actions() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isBottomSheetHalfOpen, setIsBottomSheetHalfOpen] = useState(false);
  const [isBottomSheetFullOpen, setIsBottomSheetFullOpen] = useState(false);
  return (
    <main className={`flex min-h-screen flex-col items-center p-10 `}>
      <div className="max-w-xs w-full">
        <TextButton
          label={
            isBottomSheetOpen || isBottomSheetFullOpen || isBottomSheetHalfOpen
              ? "Close"
              : "Open"
          }
          action={() => {
            isBottomSheetOpen || isBottomSheetFullOpen || isBottomSheetHalfOpen
              ? setIsBottomSheetOpen(false)
              : setIsBottomSheetOpen(!isBottomSheetOpen);
            setIsBottomSheetHalfOpen(false);
            setIsBottomSheetFullOpen(false);
          }}
        />
      </div>
      <div
        className={`fixed bottom-0 left-0 right-0 flex flex-col items-center justify-center`}>
        {isBottomSheetOpen || isBottomSheetFullOpen || isBottomSheetHalfOpen ? (
          <></>
        ) : (
          <div className="flex items-center justify-center">
            <div
              className={"arrow-up cursor-pointer"}
              onClick={() => {
                setIsBottomSheetOpen(true);
                setIsBottomSheetHalfOpen(false);
                setIsBottomSheetFullOpen(false);
              }}></div>
          </div>
        )}
        <div className="w-full ">
          <BottomSheet
            close={() => {
              setIsBottomSheetOpen(false);
              setIsBottomSheetHalfOpen(false);
              setIsBottomSheetFullOpen(false);
            }}
            halfOpen={
              isBottomSheetHalfOpen
                ? () => {}
                : () => {
                    setIsBottomSheetHalfOpen(!isBottomSheetHalfOpen);
                    setIsBottomSheetFullOpen(false);
                    setIsBottomSheetOpen(false);
                  }
            }
            fullOpen={
              isBottomSheetFullOpen
                ? () => {}
                : () => {
                    setIsBottomSheetFullOpen(!isBottomSheetFullOpen);
                    setIsBottomSheetHalfOpen(false);
                    setIsBottomSheetOpen(false);
                  }
            }
            isHalfOpen={isBottomSheetHalfOpen}
            isFullOpen={isBottomSheetFullOpen}
            isOpen={isBottomSheetOpen}
          />
        </div>
      </div>
    </main>
  );
}
