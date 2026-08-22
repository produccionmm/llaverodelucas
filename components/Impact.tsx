const evaluation = [
  "Encuestas iniciales y finales a los jóvenes sobre habilidades sociales.",
  "Escalas de autoestima y autopercepción.",
  "Cuestionarios de satisfacción para familias y docentes.",
  "Observación de la participación activa en las dinámicas.",
];

const indicators = [
  "Número de alumnos participantes",
  "Número de sesiones impartidas",
  "Casos de mejora individual documentados",
  "Comparativa antes-después en clima escolar",
];

export default function Impact() {
  return (
    <section className="bg-[#082341] px-6 py-28 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#f5b400]">
            Evaluación, seguimiento e impacto
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Medir para
            <span className="block text-[#f5b400]">seguir mejorando.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            La evaluación será continua y multidimensional para conocer el
            progreso real de los participantes y la evolución del proyecto.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2.5rem] bg-white p-8 text-[#082341] lg:p-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1476c8]">
              Cómo evaluamos
            </p>

            <div className="mt-8 space-y-5">
              {evaluation.map((item, index) => (
                <div key={item} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1476c8] text-sm font-black text-white">
                    {index + 1}
                  </div>

                  <p className="leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 lg:p-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f5b400]">
              Memoria anual
            </p>

            <h3 className="mt-5 text-3xl font-black">
              Indicadores claros de impacto
            </h3>

            <div className="mt-8 grid gap-4">
              {indicators.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-xs font-black text-[#f5b400]">
                    0{index + 1}
                  </p>

                  <p className="mt-2 font-semibold text-white/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}