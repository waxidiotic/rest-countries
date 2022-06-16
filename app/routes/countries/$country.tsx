import { useParams } from "@remix-run/react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export default function CountryDetail() {
  const { country } = useParams();
  console.log(country);

  return (
    <main className="px-4 py-6 sm:px-20 sm:py-10 max-w-[1441px] flex flex-col gap-20">
      <div className="w-[136px] h-10 dark:bg-elements-dark dark:text-white flex items-center font-light gap-2 pl-8 rounded-md cursor-pointer dark:hover:bg-elements-dark/50 dark:shadow-none shadow-md bg-white hover:bg-white/30">
        <MdOutlineKeyboardBackspace className="h-5 w-5" />
        Back
      </div>
      <div className="flex gap-36">
        <div className="w-[560px]">
          <img
            src={`https://flagcdn.com/us.svg`}
            width="560"
            alt="Placeholder"
          />
        </div>
        <div className="dark:text-white font-light">
          <h1 className="text-[32px] font-extrabold">United States</h1>
          <div>
            <div>
              <span className="font-semibold">Native Name:&nbsp;</span>United
              States of America
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
