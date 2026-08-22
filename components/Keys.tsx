const keys = [
  {
    number: "01",
    title: "Comunicación",
    description:
      "Escucha activa, claridad y respeto al expresar ideas.",
    color: "#1476c8",
  },
  {
    number: "02",
    title: "Empatía",
    description:
      "Ponerse en el lugar del otro y reconocer emociones.",
    color: "#55a630",
  },
  {
    number: "03",
    title: "Asertividad",
    description:
      "Defender opiniones y derechos sin agredir ni someterse.",
    color: "#f5b400",
  },
  {
    number: "04",
    title: "Resolución de conflictos",
    description:
      "Técnicas de negociación y mediación pacífica.",
    color: "#ef5b22",
  },
  {
    number: "05",
    title: "Autoestima",
    description:
      "Reconocimiento de fortalezas y desarrollo de confianza.",
    color: "#a32473",
  },
  {
    number: "06",
    title: "Responsabilidad digital",
    description:
      "Buen uso de internet y redes sociales.",
    color: "#1476c8",
  },
  {
    number: "07",
    title: "Trabajo en equipo",
    description:
      "Colaboración, reparto de tareas y liderazgo compartido.",
    color: "#55a630",
  },
  {
    number: "08",
    title: "Resiliencia",
    description:
      "Capacidad de superar frustraciones y aprender de errores.",
    color: "#f5b400",
  },
  {
    number: "09",
    title: "Creatividad",
    description:
      "Desarrollo del pensamiento crítico e innovador.",
    color: "#ef5b22",
  },
];

export default function Keys() {
  return (
    <section id="llaves" className="bg-[#082341] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#f5b400]">
            Las llaves del proyecto
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nueve llaves para
            <span className="block text-[#f5b400]">
              abrir nuevas puertas.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Cada llave representa una habilidad social y emocional esencial
            para el desarrollo personal, académico y profesional de los
            jóvenes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {keys.map((key) => (
            <article
              key={key.number}
              className="group relative min-h-[250px] overflow-hidden rounded-[2rem] bg-white p-8 transition duration-300 hover:-translate-y-2"
            >
              <div
                className="absolute left-0 top-0 h-2 w-full"
                style={{ backgroundColor: key.color }}
              />

              <div className="flex items-start justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-black text-white"
                  style={{ backgroundColor: key.color }}
                >
                  {key.number}
                </span>

                <MiniKey color={key.color} />
              </div>

              <h3 className="mt-10 text-2xl font-black tracking-tight text-[#082341]">
                {key.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {key.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="max-w-4xl text-lg leading-8 text-white/75">
            Cada llave puede estar representada mediante materiales{" "}
            <strong className="text-white">físicos</strong>, como un llavero
            real con llaves de colores;{" "}
            <strong className="text-white">digitales</strong>, mediante
            insignias y diplomas; y{" "}
            <strong className="text-white">simbólicos</strong>, mediante
            reconocimientos en el aula.
          </p>
        </div>

      </div>
    </section>
  );
}

function MiniKey({ color }: { color: string }) {
  return (
    <div className="relative h-20 w-9 rotate-[20deg] opacity-90 transition duration-300 group-hover:rotate-[30deg]">
      <div
        className="absolute left-1/2 top-0 h-9 w-9 -translate-x-1/2 rounded-full"
        style={{ backgroundColor: color }}
      >
        <div className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </div>

      <div
        className="absolute left-1/2 top-7 h-12 w-2.5 -translate-x-1/2"
        style={{ backgroundColor: color }}
      />

      <div
        className="absolute bottom-1 left-[18px] h-2.5 w-4"
        style={{ backgroundColor: color }}
      />

      <div
        className="absolute bottom-5 left-[18px] h-2.5 w-3"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}