const corporateKeys = [
  {
    number: "01",
    title: "Comunicación Asertiva y Efectiva",
    description:
      "Escucha activa, claridad, retroalimentación constructiva y respeto profesional.",
    color: "#1476c8",
  },
  {
    number: "02",
    title: "Empatía Organizacional",
    description:
      "Comprensión de las dinámicas interpersonales y reconocimiento de emociones en el entorno laboral.",
    color: "#55a630",
  },
  {
    number: "03",
    title: "Asertividad y Negociación",
    description:
      "Defensa de posturas y criterio propio sin generar fricciones, promoviendo acuerdos sostenibles.",
    color: "#f5b400",
  },
  {
    number: "04",
    title: "Resolución de Conflictos",
    description:
      "Técnicas de mediación pacífica, negociación interna y gestión de diferencias entre departamentos.",
    color: "#ef5b22",
  },
  {
    number: "05",
    title: "Inteligencia Emocional y Autoestima Profesional",
    description:
      "Reconocimiento del talento propio, autoconfianza y gestión del síndrome del impostor.",
    color: "#a32473",
  },
  {
    number: "06",
    title: "Bienestar y Responsabilidad Digital",
    description:
      "Gestión del tiempo en entornos remotos o híbridos, desconexión digital y uso eficiente de herramientas corporativas.",
    color: "#1476c8",
  },
  {
    number: "07",
    title: "Trabajo en Equipo y Liderazgo Compartido",
    description:
      "Colaboración interdepartamental, delegación efectiva y consecución de metas comunes.",
    color: "#55a630",
  },
  {
    number: "08",
    title: "Resiliencia y Gestión del Cambio",
    description:
      "Tolerancia a la frustración, superación de adversidades y aprendizaje orientado a la mejora continua.",
    color: "#ef5b22",
  },
  {
    number: "09",
    title: "Pensamiento Crítico e Innovación",
    description:
      "Desarrollo de la creatividad aplicada a la resolución de problemas corporativos.",
    color: "#a32473",
  },
];

export default function CorporateKeys() {
  return (
    <section
      id="llaves-corporativas"
      className="relative overflow-hidden bg-[#082341] px-6 py-24 text-white lg:px-10 lg:py-32"
    >
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#1476c8]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#a32473]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f5b400]">
            Itinerario competencial
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Las 9 llaves
            <span className="block text-white/40">del proyecto.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
            Nueve competencias fundamentales para impulsar el desarrollo
            profesional, fortalecer los equipos y favorecer un liderazgo más
            consciente.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {corporateKeys.map((item) => (
            <article
              key={item.number}
              className="group relative min-h-[300px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.09]"
            >
              <div
                className="absolute left-0 top-0 h-1.5 w-full"
                style={{ backgroundColor: item.color }}
              />

              <div className="flex items-center justify-between">
                <span
                  className="text-sm font-black"
                  style={{ color: item.color }}
                >
                  LLAVE {item.number}
                </span>

                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2"
                  style={{ borderColor: item.color }}
                >
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-black leading-tight">
                {item.title}
              </h3>

              <p className="mt-5 leading-7 text-white/60">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 sm:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <p className="max-w-4xl text-lg leading-8 text-white/70">
              Cada llave se representa mediante{" "}
              <strong className="text-white">insignias digitales</strong>,{" "}
              <strong className="text-white">
                certificaciones corporativas
              </strong>{" "}
              <span className="italic">(micro-credentials)</span> o elementos
              simbólicos de reconocimiento dentro de la empresa.
            </p>

            <div className="flex gap-2">
              {["#1476c8", "#55a630", "#f5b400", "#ef5b22", "#a32473"].map(
                (color) => (
                  <span
                    key={color}
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}