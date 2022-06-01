import { MdOutlineDarkMode } from "react-icons/md";

export default function Nav() {
  return (
    <div className="h-20 w-full flex justify-between bg-white px-20 items-center shadow-lg">
      <div className="text-2xl font-extrabold">Where in the world?</div>
      <div className="font-semibold flex items-center gap-2">
        <MdOutlineDarkMode className="h-5 w-5" />
        <span>Dark Mode</span>
      </div>
    </div>
  );
}
