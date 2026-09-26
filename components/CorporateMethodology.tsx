const methods = [
  {
    number: "01",
    title: "Píldoras y Talleres Interactivos",
    description:
      "Sesiones conducidas por expertos en desarrollo organizacional y facilitadores externos.",
    color: "#1476c8",
  },
  {
    number: "02",
    title: "Role-Playing y Simulación de Casos",
    description:
      "Representación de situaciones críticas: reuniones difíciles, gestión de crisis y evaluaciones del desempeño.",
    color: "#55a630",
  },
  {
    number: "03",
    title: "Debates y Foros de Reflexión",
    description:
      "Espacios de diálogo sobre liderazgo ético, conciliación, prevención del burnout y cultura de empresa.",
    color: "#f5b400",
  },
  {
    number: "04",
    title: "Gamificación Aplicada",
    description:
      "Retos por equipos, sistemas de puntuación e incentivos que incrementan el engagement.",
    color: "#ef5b22",
  },
  {
    number: "05",
    title: "Storytelling Corporativo",
    description:
      "Análisis de casos reales de éxito, fracasos instructivos y testimonios sectoriales.",
    color: "#a32473",
  },
  {
    number: "06",
    title: "Ecosistema Digital",
    description:
      "Acceso a plataformas e-learning, recursos multimedia como vídeos y podcasts, y herramientas de seguimiento del progreso.",
    color: "#1476c8",
  },
];

export default function CorporateMethodology() {
  return (
    <section
      id="metodologia-corporativa"
      className="relative overflow-hidden bg-[#fbfaf7] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-yellow-200/20 blur-3xl" />
      <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* CABECERA */}
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1476c8]">
              Aprender haciendo
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#082341] sm:text-5xl lg:text-6xl">
              Metodología
              <span className="block text-[#1476c8]">
                B-Learning Vivencial
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              El aprendizaje se fundamenta en la participación activa y el
              entrenamiento práctico, combinando experiencias presenciales,
              dinámicas colaborativas y recursos digitales.
            </p>
          </div>
        </div>

        {/* MÉTODOS */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {methods.map((method) => (
            <article
              key={method.number}
              className="group relative min-h-[300px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className="absolute left-0 top-0 h-1.5 w-full"
                style={{ backgroundColor: method.color }}
              />

              <div className="flex items-center justify-between">
                <span
                  className="text-sm font-black"
                  style={{ color: method.color }}
                >
                  {method.number}
                </span>

                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full text-xl font-black"
                  style={{
                    backgroundColor: `${method.color}15`,
                    color: method.color,
                  }}
                >
                  +
                </span>
              </div>

              <h3 className="mt-12 text-2xl font-black leading-tight text-[#082341]">
                {method.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-500">
                {method.description}
              </p>
            </article>
          ))}
        </div>

        {/* MENSAJE FINAL */}
        <div className="mt-16 rounded-[2.5rem] bg-[#f5b400] p-8 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#082341]/60">
                Formación aplicada
              </p>

              <h3 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-[#082341] sm:text-4xl">
                Del conocimiento a la práctica profesional.
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#082341]/70">
                Cada dinámica está orientada a trasladar las competencias
                trabajadas a situaciones reales del entorno laboral.
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <a
                href="#contacto-corporativo"
                className="rounded-full bg-[#082341] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1"
              >
                Solicitar información →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}