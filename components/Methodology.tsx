const methods = [
  {
    number: "01",
    title: "Charlas interactivas",
    description:
      "Sesiones participativas que pueden incorporar a otros profesionales y referentes.",
    color: "#1476c8",
  },
  {
    number: "02",
    title: "Rol y dramatización",
    description:
      "Los jóvenes representan situaciones de conflicto y aprenden a afrontarlas y resolverlas.",
    color: "#55a630",
  },
  {
    number: "03",
    title: "Debates dirigidos",
    description:
      "Reflexión en grupo sobre bullying, amistad, respeto, uso del móvil, malos hábitos y situaciones cotidianas.",
    color: "#f5b400",
  },
  {
    number: "04",
    title: "Gamificación",
    description:
      "Recompensas, retos y juegos que aumentan la participación, la motivación y el aprendizaje.",
    color: "#ef5b22",
  },
  {
    number: "05",
    title: "Narrativas y storytelling",
    description:
      "Cuentos, historias reales y testimonios como herramientas para comprender y aprender.",
    color: "#a32473",
  },
  {
    number: "06",
    title: "Recursos multimedia",
    description:
      "Vídeos, podcasts, materiales gráficos y plataformas digitales de seguimiento.",
    color: "#1476c8",
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="overflow-hidden bg-[#fbfaf7] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#1476c8]">
              Metodología enriquecida
            </p>

            <h2 className="max-w-xl text-4xl font-black tracking-tight text-[#082341] sm:text-5xl lg:text-6xl">
              Aprender
              <span className="block">
                haciendo.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              El aprendizaje se basa en la{" "}
              <strong className="text-[#082341]">
                participación activa y la vivencia práctica.
              </strong>{" "}
              Los jóvenes no son simples espectadores: experimentan,
              reflexionan, participan y aprenden.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {methods.map((method) => (
            <article
              key={method.number}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-sm font-black tracking-[0.15em]"
                  style={{ color: method.color }}
                >
                  {method.number}
                </span>

                <span
                  className="h-3 w-3 rounded-full transition duration-300 group-hover:scale-[1.7]"
                  style={{ backgroundColor: method.color }}
                />
              </div>

              <h3 className="mt-12 text-2xl font-black tracking-tight text-[#082341]">
                {method.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {method.description}
              </p>

              <div
                className="absolute bottom-0 left-0 h-1.5 w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: method.color }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}