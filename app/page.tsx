import Link from "next/link";

const homes = [
  ["a", "Jordaan", "Canal apartment", "€725.000", "78 m² · 3 rooms"],
  ["b", "Oost", "Garden maisonette", "€610.000", "92 m² · 4 rooms"],
  ["c", "Zuid", "Top-floor flat", "€890.000", "84 m² · 3 rooms"],
];

const areas = ["Jordaan", "De Pijp", "Oost", "Zuid", "Noord"];

export default function HomePage() {
  return (
    <>
      <section className="search">
        <h1>Homes with the keys still warm.</h1>
        <div className="fake">Three sample homes. Open listings for the full set.</div>
      </section>
      <section className="listings">
        {homes.map(([tone, area, title, price, facts]) => (
          <article className="home" key={title}>
            <div className={tone === "a" ? "photo" : tone === "b" ? "photo b" : "photo c"} />
            <div className="meta">
              <p>{area}</p>
              <h2>{title}</h2>
              <strong>{price}</strong>
              <p>{facts}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="areas">
        {areas.map((area) => <Link key={area} href={area === "Jordaan" || area === "Oost" || area === "Zuid" ? "/" + area.toLowerCase() : "/neighbourhoods"}>{area}</Link>)}
      </section>
    </>
  );
}
