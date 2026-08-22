const programs = [
  {
    stage: "Primaria",
    age: "8–12 años",
    color: "#1476c8",
    intro:
      "Es recomendable el inicio en el tercer curso, a partir de los 8 años.",
    description:
      "La Educación Primaria proporciona conocimientos y habilidades básicas para el desarrollo académico, social y personal.",
    activities: [
      "Dinámicas lúdicas",
      "Cuentos con moralejas",
      "Juegos de cooperación",
      "Talleres de emociones",
    ],
  },
  {
    stage: "ESO",
    age: "13–16 años",
    color: "#55a630",
    intro:
      "Una etapa fundamental para consolidar hábitos, identidad personal y relaciones sociales.",
    description:
      "Trabajamos herramientas que ayuden a los jóvenes a afrontar su desarrollo personal, académico y social de una forma responsable.",
    activities: [
      "Debates",
      "Conflictos en redes sociales",
      "Identidad personal",
      "Gestión del estrés académico",
    ],
  },
  {
    stage: "Bachillerato o Grado Superior",
    age: "16–18 años",
    color: "#ef5b22",
    intro:
      "Preparación para afrontar nuevas decisiones académicas, profesionales y personales.",
    description:
      "Esta etapa busca reforzar la madurez, la responsabilidad y las competencias necesarias para el futuro formativo y profesional.",
    activities: [
      "Habilidades para entrevistas",
      "Liderazgo",
      "Toma de decisiones responsables",
      "Orientación vocacional",
    ],
  },
];

export default function Programs() {
  return (
    <section
      id="programas"
      className="relative overflow-hidden bg-white px-6 py-28 lg:px-10"
    >
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-yellow-100/50 blur-3xl" />
      <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#a32473]">
            Programas adaptados por edades
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[#082341] sm:text-5xl lg:text-6xl">
            Una etapa.
            <span className="block">Una forma de aprender.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Los contenidos y las dinámicas se adaptan al nivel de madurez de
            cada grupo, manteniendo siempre la coherencia del proyecto global.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.stage}
              className="relative flex min-h-[560px] flex-col overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-[#fbfaf7] p-8 lg:p-9"
            >
              <div
                className="absolute left-0 top-0 h-2 w-full"
                style={{ backgroundColor: program.color }}
              />

              <div className="flex items-start justify-between gap-5">
                <div>
                  <p
                    className="text-sm font-black uppercase tracking-[0.15em]"
                    style={{ color: program.color }}
                  >
                    {program.age}
                  </p>

                  <h3 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#082341]">
                    {program.stage}
                  </h3>
                </div>

                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-xl font-black text-white"
                  style={{ backgroundColor: program.color }}
                >
                  {program.age.split("–")[0]}
                </div>
              </div>

              <p className="mt-8 text-lg font-bold leading-7 text-[#082341]">
                {program.intro}
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                {program.description}
              </p>

              <div className="mt-8 border-t border-slate-200 pt-7">
                <p className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                  Trabajaremos
                </p>

                <div className="space-y-4">
                  {program.activities.map((activity) => (
                    <div
                      key={activity}
                      className="flex items-center gap-3 font-semibold text-[#082341]"
                    >
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: program.color }}
                      />

                      {activity}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8">
                <div
                  className="h-1 w-16 rounded-full"
                  style={{ backgroundColor: program.color }}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="rounded-full bg-[#082341] px-7 py-4 text-center text-sm font-bold text-white">
            De los 8 a los 18 años · Un mismo proyecto que evoluciona con ellos
          </div>
        </div>
      </div>
    </section>
  );
}