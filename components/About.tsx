export default function About() {
  return (
    <section id="proyecto" className="bg-white px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#1476c8]">
              El proyecto
            </p>

            <h2 className="text-4xl font-black tracking-tight text-[#082341] sm:text-5xl">
              ¿Qué es El Llavero de Lucas?
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Se trata de un proyecto educativo con enfoque práctico, basado en
              la metáfora de un llavero que guarda llaves valiosas. Cada llave
              representa una habilidad social esencial.
            </p>

            <p>
              El llavero no solo simboliza aprendizaje, sino también la
              capacidad de abrir puertas hacia un futuro personal, académico y
              profesional más positivo.
            </p>

            <p>
              El proyecto está diseñado para jóvenes de entre{" "}
              <strong className="font-bold text-[#082341]">8 y 18 años</strong>,
              adaptando los contenidos y las dinámicas a cada etapa del
              desarrollo para garantizar aprendizajes significativos y útiles.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          <Stat number="8–18" label="años" />
          <Stat number="9" label="habilidades esenciales" />
          <Stat number="1" label="itinerario educativo" />
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-[2rem] bg-[#fbfaf7] p-8">
      <p className="text-5xl font-black text-[#082341]">{number}</p>
      <p className="mt-2 font-semibold text-slate-500">{label}</p>
    </div>
  );
}