import Image from "next/image";
import { Inter } from "next/font/google";
import { TextButton } from "@/components/TextButton";
import { BottomSheet } from "@/components/BottomSheet";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isBottomSheetHalfOpen, setIsBottomSheetHalfOpen] = useState(true);
  const [isBottomSheetFullOpen, setIsBottomSheetFullOpen] = useState(false);
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-10 ${inter.className}`}>
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
      <div className={`fixed bottom-0 left-0 right-0 `}>
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
        <div>
          <BottomSheet
            close={() => {
              setIsBottomSheetOpen(false);
              setIsBottomSheetHalfOpen(false);
              setIsBottomSheetFullOpen(false);
            }}
            halfOpen={() => {
              setIsBottomSheetHalfOpen(!isBottomSheetHalfOpen);
              setIsBottomSheetFullOpen(false);
              setIsBottomSheetOpen(false);
            }}
            fullOpen={() => {
              setIsBottomSheetFullOpen(!isBottomSheetFullOpen);
              setIsBottomSheetHalfOpen(false);
              setIsBottomSheetOpen(false);
            }}
            isHalfOpen={isBottomSheetHalfOpen}
            isFullOpen={isBottomSheetFullOpen}
            isOpen={isBottomSheetOpen}
          />
        </div>
      </div>
    </main>
  );
}
