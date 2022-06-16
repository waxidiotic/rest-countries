import { json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import CountryCard from "~/components/CountryCard";
import RegionFilter from "~/components/RegionFilter";
import type { Country } from "~/types";

export async function loader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return json(await res.json());
}

export default function Index() {
  const countries = useLoaderData<Country[]>();
  const [searchTerm, setSearchTerm] = useState<string>();

  return (
    <main className="px-4 py-6 sm:px-20 sm:py-10 max-w-[1441px]">
      <div className="flex justify-between">
        <div className="relative rounded-md shadow-md w-full sm:w-[480px] h-14 text-input-light">
          <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
            <MdSearch className="fill-input-light dark:fill-white h-7 w-7" />
          </div>
          <Form method="get">
            <input
              type="text"
              name="search"
              id="search"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-20 pr-12 text-sm border-none rounded-md h-14 dark:bg-elements-dark dark:placeholder:text-white dark:text-white"
              placeholder="Search for a country..."
              onInput={event =>
                setSearchTerm((event.target as HTMLInputElement).value)
              }
            />
          </Form>
        </div>
        <RegionFilter />
      </div>
      <div className="mt-10 flex flex-wrap gap-[75px] w-full sm:flex-row flex-col items-center sm:items-start">
        {searchTerm
          ? countries
              .filter(country =>
                country.name.common.toLowerCase().includes(searchTerm)
              )
              .map((country, i) => <CountryCard country={country} key={i} />)
          : countries.map((country, i) => (
              <Link to={`/countries/${country.cca2.toLowerCase()}`} key={i}>
                <CountryCard country={country} />
              </Link>
            ))}
      </div>
    </main>
  );
}
