const community = [
  {
    title: "Familias y AMPAs",
    description:
      "Sesiones formativas para reforzar en casa los aprendizajes trabajados dentro del proyecto.",
    color: "#1476c8",
  },
  {
    title: "Docentes",
    description:
      "Formación en metodologías activas y recursos del proyecto para acompañar mejor al alumnado.",
    color: "#55a630",
  },
  {
    title: "Policía Local y Agentes Tutores",
    description:
      "Figuras de acompañamiento, referencia y seguridad para los jóvenes y la comunidad educativa.",
    color: "#ef5b22",
  },
  {
    title: "Asociaciones y entidades locales",
    description:
      "Colaboración en actividades complementarias y acciones que amplíen el impacto del proyecto.",
    color: "#a32473",
  },
];

export default function Community() {
  return (
    <section className="bg-[#fbfaf7] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#55a630]">
              Participación de la comunidad
            </p>

            <h2 className="text-4xl font-black tracking-tight text-[#082341] sm:text-5xl lg:text-6xl">
              Un proyecto que
              <span className="block">implica a todos.</span>
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            El impacto será mayor cuando toda la comunidad educativa forme
            parte del proceso y contribuya a reforzar los aprendizajes.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {community.map((item) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8"
            >
              <div
                className="absolute left-0 top-0 h-full w-2"
                style={{ backgroundColor: item.color }}
              />

              <h3 className="text-2xl font-black text-[#082341]">
                {item.title}
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}