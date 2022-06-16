import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { MdArrowDownward } from "react-icons/md";

const regions = [
  "Filter by Region",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania"
];

export default function RegionFilter() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [query, setQuery] = useState("");

  const filteredRegions =
    query === ""
      ? regions
      : regions.filter(region =>
          region.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <Combobox value={selectedRegion} onChange={setSelectedRegion} nullable>
      <div className="relative w-[200px] h-14">
        <div className="relative w-full h-full cursor-default overflow-hidden bg-white dark:bg-elements-dark text-left shadow-md rounded-md pl-2">
          <Combobox.Input
            onChange={event => setQuery(event.target.value)}
            className="h-full dark:bg-elements-dark dark:text-white text-sm outline-none border-none focus:outline-none focus-visible:outline-none focus:ring-0"
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <MdArrowDownward
              className="h-5- w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {filteredRegions.map(region => (
            <Combobox.Option
              key={region}
              value={region}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active ? "bg-teal-600 text-white" : "text-gray-900"
                }`
              }
            >
              {region}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
}
