import { cities } from "@/lib/data";

export default function CitiesOverview() {
  return (
    <>
      <h1>Cities</h1>
      <ul>
        {cities.map(({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
