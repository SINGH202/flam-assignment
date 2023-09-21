import { TextButtonProps, TextButtonStatus } from "../../types";

export const statusClasses = ({
  status,
}: {
  status: TextButtonStatus;
}): string => {
  status = status;
  const classes: { [key in TextButtonStatus]: string } = {
    PRIMARY: `bg-[#F1F5F9] hover:bg-[#CBD5E1] border-2 border-[#CBD5E1] cursor-pointer transition-all duration-1000 ease-in-out text-black`,
    SECONDARY: `bg-[#CBD5E1] cursor-pointer transition-all duration-1000 ease-in-out text-black`,
    };
  return classes[status];
};

export const TextButton = ({
  label,
  action,
  status = TextButtonStatus.PRIMARY,
}: TextButtonProps) => {
  const classes = statusClasses({ status });
  return (
    <button
      className={`w-full py-1.5 rounded-3xl ${classes} min-h-[36px] min-w-[56px] xs:min-h-[44px] xs:min-w-[64px]`}
      onClick={() => {
        action();
      }}>
      {label}
    </button>
  );
};
