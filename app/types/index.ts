export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages?: Languages;
  translations: OfficialCommonRecord;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonyms;
  flag?: string;
  maps: Maps;
  population: number;
  gini?: Gini;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

type OfficialCommonRecord = Record<
  string,
  {
    official: string;
    common: string;
  }
>;

interface Name {
  common: string;
  official: string;
  nativeName?: OfficialCommonRecord;
}

type Currencies = Record<
  string,
  {
    name: TimeRanges;
    symbol: string;
  }
>;

interface Idd {
  root: string;
  suffixes: string[];
}

type Languages = Record<string, string>;

type Demonyms = Record<
  string,
  {
    f: string; // Female
    m: string; // Male
  }
>;

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

type Gini = Record<string, number>;

interface Car {
  signs?: string[];
  side: "right" | "left";
}

interface Flags {
  png: string;
  svg: string;
}

interface CoatOfArms {
  png?: string;
  svg?: string;
}

interface CapitalInfo {
  latlng?: number[];
}

interface PostalCode {
  format: string;
  regex?: string;
}
