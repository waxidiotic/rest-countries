export default function CountryCard() {
  return (
    <div className="bg-white w-[264px] h-[336px] shadow-md">
      <img src="http://placekitten.com/264/160" alt="Placeholder" />
      <div className="p-6 space-y-4">
        <div>
          <span className="text-lg font-bold">Germany</span>
        </div>
        <div className="space-y-1 text-sm">
          <div>
            <span className="font-semibold">Population: </span>
            <span>81,770,900</span>
          </div>
          <div>
            <span className="font-semibold">Region: </span>
            <span>Europe</span>
          </div>
          <div>
            <span className="font-semibold">Capital: </span>
            <span>Berlin</span>
          </div>
        </div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
