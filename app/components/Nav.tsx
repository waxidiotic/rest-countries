// import { MdOutlineDarkMode } from "react-icons/md";

export default function Nav() {
  return (
    <div className="h-20 w-full flex justify-between bg-white dark:bg-elements-dark px-4 sm:px-20 items-center shadow-lg dark:text-white">
      <div className="sm:text-2xl text-sm font-extrabold">
        Where in the world?
      </div>
      {/* <div className="font-semibold flex items-center gap-2 hover:bg-white/5 py-2 px-4 rounded-lg cursor-pointer">
        <MdOutlineDarkMode className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="sm:text-base text-xs">Dark Mode</span>
      </div> */}
    </div>
  );
}
