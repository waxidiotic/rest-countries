import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import type { Country } from "~/types";

export const loader: LoaderFunction = async ({ params }) => {
  const { country } = params;
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${country}`);
  return json(await res.json());
};

export default function CountryDetail() {
  const data = useLoaderData<Country[]>()[0];
  console.log(data);

  const currencies = [];
  for (const currency in data.currencies) {
    currencies.push(data.currencies[currency].name);
  }

  const languages = [];
  for (const language in data.languages) {
    languages.push(data.languages[language]);
  }

  return (
    <main className="px-4 py-6 sm:px-20 sm:py-10 max-w-[1441px] flex flex-col gap-20">
      <div className="w-[136px] h-10 dark:bg-elements-dark dark:text-white flex items-center font-light gap-2 pl-8 rounded-md cursor-pointer dark:hover:bg-elements-dark/50 dark:shadow-none shadow-md bg-white hover:bg-white/30">
        <MdOutlineKeyboardBackspace className="h-5 w-5" />
        Back
      </div>
      <div className="flex w-full">
        <div className="w-[560px] mr-36">
          <img
            src={`https://flagcdn.com/${data.cca2.toLowerCase()}.svg`}
            width="560"
            alt="Placeholder"
          />
        </div>
        <div className="dark:text-white font-light flex flex-col justify-center">
          <h1 className="text-[32px] font-extrabold mb-8">
            {data.name.common}
          </h1>
          <div className="flex flex-col max-h-40 leading-8 flex-wrap gap-x-20">
            <div>
              <span className="font-semibold">Official Name:&nbsp;</span>
              {data.name.official}
            </div>
            <div>
              <span className="font-semibold">Population:&nbsp;</span>
              {data.population.toLocaleString()}
            </div>
            <div>
              <span className="font-semibold">Region:&nbsp;</span>
              {data.region}
            </div>
            <div>
              <span className="font-semibold">Subregion:&nbsp;</span>
              {data.subregion || "-"}
            </div>
            <div>
              <span className="font-semibold">Capital:&nbsp;</span>
              {data.capital ? data.capital[0] : "-"}
            </div>
            <div>
              <span className="font-semibold">Top Level Domain:&nbsp;</span>
              {data.tld}
            </div>
            <div>
              <span className="font-semibold">Currencies:&nbsp;</span>
              {currencies.join(", ")}
            </div>
            <div>
              <span className="font-semibold">Languages:&nbsp;</span>
              {languages.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
