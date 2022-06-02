import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import CountryCard from "~/components/CountryCard";
import type { Country } from "~/types";

export async function loader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return json(await res.json());
}

export default function Index() {
  const countries = useLoaderData<Country[]>();
  const [searchTerm, setSearchTerm] = useState<string>();

  return (
    <main className="px-20 py-10 max-w-[1441px]">
      <div>
        <div className="relative rounded-md shadow-md w-[480px] h-14 text-input-light">
          <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
            <MdSearch className="fill-input-light h-7 w-7" />
          </div>
          <Form method="get">
            <input
              type="text"
              name="search"
              id="search"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-20 pr-12 sm:text-sm border-none rounded-md h-14"
              placeholder="Search for a country..."
              onInput={event =>
                setSearchTerm((event.target as HTMLInputElement).value)
              }
            />
          </Form>
        </div>
        <div>{/* TODO: Filter dropdown */}</div>
      </div>
      <div className="mt-10 flex flex-wrap gap-[75px] w-full">
        {searchTerm
          ? countries
              .filter(country =>
                country.name.common.toLowerCase().includes(searchTerm)
              )
              .map((country, i) => <CountryCard country={country} key={i} />)
          : countries.map((country, i) => (
              <CountryCard country={country} key={i} />
            ))}
      </div>
    </main>
  );
}
