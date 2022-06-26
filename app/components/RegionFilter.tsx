import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MdArrowDownward } from "react-icons/md";

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(" ");
}

const regions = [
  "All Regions",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania"
];

export default function RegionFilter() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <Menu as="div" className="relative inline-block text-left w-[200px]">
      <div>
        <Menu.Button className="inline-flex justify-between w-full rounded-md h-14 items-center shadow-md px-4 py-2 bg-white dark:text-white dark:bg-elements-dark text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {selectedRegion}
          <MdArrowDownward className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-[200px] rounded-md shadow-lg bg-white dark:text-white dark:bg-elements-dark ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {regions.map(region => (
              <Menu.Item key={region}>
                {({ active }) => (
                  <span
                    className={classNames(
                      active ? "bg-gray-100 dark:bg-white/10" : "",
                      "block px-4 py-2 text-sm cursor-default text-dark"
                    )}
                    onClick={() => {
                      setSelectedRegion(region);
                    }}
                  >
                    {region}
                  </span>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
