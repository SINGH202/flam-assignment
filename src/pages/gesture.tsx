import { useEffect, useState } from "react";

export default function Gesture() {
  const [isGrabbed, setIsGrabbed] = useState(false);
  const [bottomSheetHeight, setBottomSheetHeight] = useState(10);
  const [currentPosition, setCurrentPosition] = useState(0);

  const getContactPosition = (event: any) =>
    event.touches ? event.touches[0] : event;

  const onMouseDownStart = (e: any) => {
    setIsGrabbed(true);
    const { pageY } = getContactPosition(event);
    setCurrentPosition(pageY);
  };

  const onMouseMove = (event: any) => {
    if (!currentPosition) return;
    const { pageY } = getContactPosition(event);
    const deltaY = currentPosition - pageY;
    setCurrentPosition(pageY);
    const deltaHeight = (deltaY / window.innerHeight) * 100;
    setBottomSheetHeight((prevHeight) => prevHeight + deltaHeight);
  };

  const onMouseMoveEnd = () => {
    setCurrentPosition(0);
    setIsGrabbed(false);
    setBottomSheetHeight((prevHeight) => {
      if (prevHeight < 25) {
        return 10;
      } else if (prevHeight > 75) {
        return 90;
      } else {
        return 50;
      }
    });
  };

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (isGrabbed) {
        onMouseMove(event);
      }
    };

    const handleMouseUp = () => {
      if (isGrabbed) {
        onMouseMoveEnd();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isGrabbed, currentPosition]);

  return (
    <main className={`flex min-h-screen flex-col items-center p-10`}>
      <div
        style={{ height: `${bottomSheetHeight}vh` }}
        className={`fixed bottom-0 left-0 right-0 flex flex-col bg-black rounded-t-2xl max-w-5xl w-full mx-auto p-2`}>
        <div
          onMouseDown={onMouseDownStart}
          className={`w-full flex items-center justify-center p-2 cursor-grab ${
            isGrabbed ? "cursor-grabbing" : "cursor-grab"
          }`}>
          <div className={`w-10 h-1 bg-gray-300 rounded-full `}></div>
        </div>
        <div
          className={`flex items-center justify-center text-lg sm:text-2xl font-mono py-2 my-1 h-full bg-gradient-to-b from-yellow-50 to-red-300 rounded-lg`}>
          <span>Sample text</span>
        </div>
      </div>
    </main>
  );
}
