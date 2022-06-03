import { MdOutlineDarkMode } from "react-icons/md";

export default function Nav() {
  return (
    <div className="h-20 w-full flex justify-between bg-white px-4 sm:px-20 items-center shadow-lg">
      <div className="sm:text-2xl text-sm font-extrabold">
        Where in the world?
      </div>
      <div className="font-semibold flex items-center gap-2">
        <MdOutlineDarkMode className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="sm:text-base text-xs">Dark Mode</span>
      </div>
    </div>
  );
}
