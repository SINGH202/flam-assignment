import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-5 text-lg font-mono font-semibold border border-black w-full h-[100vh]">
      <span
        onClick={() => {
          router.push("/gesture");
        }}
        className="p-2 rounded-lg text-center hover:bg-black hover:text-white cursor-pointer">
        Gesture Bottom Sheet
      </span>
      <span
        onClick={() => {
          router.push("actions");
        }}
        className="p-2 rounded-lg text-center hover:bg-black hover:text-white cursor-pointer">
        Action Bottom Sheet
      </span>
    </div>
  );
}
