import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import Link from "next/link";

export default function CityDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const city = cities.find(c => c.slug === slug);
  if (!city) {
    return (
      <>
        <p>{`"${slug}" not found!`}</p>
        <Link href="/cities">⇨ Back to the Cities Overview</Link>
      </>
    );
  }
  return (
    <>
      <h1>{city.name}</h1>
      <p>{city.country}</p>
      <p>{city.population}</p>
      <p>{city.description}</p>
      <Link href="/cities">⇨ Back to the Cities Overview</Link>
    </>
  );
}
