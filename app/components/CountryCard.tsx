import type { Country } from "~/types";

export default function CountryCard({ country }: { country: Country }) {
  return (
    <div className="bg-white w-[264px] shadow-md">
      <img
        src={`https://flagcdn.com/${country.cca2.toLowerCase()}.svg`}
        width="264"
        alt="Placeholder"
      />
      <div className="p-6 space-y-4">
        <div>
          <span className="text-lg font-bold">{country.name.common}</span>
        </div>
        <div className="space-y-1 text-sm">
          <div>
            <span className="font-semibold">Population: </span>
            <span>
              {country.population
                ? country.population.toLocaleString()
                : "Unknown"}
            </span>
          </div>
          <div>
            <span className="font-semibold">Region: </span>
            <span>{country.continents[0]}</span>
          </div>
          <div>
            <span className="font-semibold">Capital: </span>
            <span>{country.capital || "Unknown"}</span>
          </div>
        </div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
