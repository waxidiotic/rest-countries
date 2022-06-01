import { MdSearch } from "react-icons/md";

export default function Index() {
  return (
    <main className="px-20 py-10">
      <div>
        <div className="relative rounded-md shadow-md w-[480px] h-14 text-input-light">
          <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
            <MdSearch className="fill-input-light h-7 w-7" />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-20 pr-12 sm:text-sm border-none rounded-md h-14"
            placeholder="Search for a country..."
          />
        </div>
        <div>{/* TODO: Filter dropdown */}</div>
      </div>
    </main>
  );
}
