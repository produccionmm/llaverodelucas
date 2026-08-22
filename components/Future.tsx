const future = [
  {
    title: "Formación de formadores",
    description:
      "Docentes, orientadores y policías locales podrán recibir una guía didáctica para aplicar y reforzar el proyecto.",
    color: "#1476c8",
  },
  {
    title: "Material descargable",
    description:
      "Fichas, cuadernos de trabajo y guías para familias disponibles como recursos de apoyo.",
    color: "#55a630",
  },
  {
    title: "Web y redes sociales",
    description:
      "Un espacio para compartir recursos, testimonios, buenas prácticas y materiales del proyecto.",
    color: "#f5b400",
  },
  {
    title: "Escalabilidad",
    description:
      "Posibilidad de replicar El Llavero de Lucas en otros municipios y comunidades.",
    color: "#a32473",
  },
];

export default function Future() {
  return (
    <section className="bg-white px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#ef5b22]">
            Sostenibilidad y futuro
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[#082341] sm:text-5xl lg:text-6xl">
            Un proyecto preparado
            <span className="block">para crecer.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            La continuidad del programa se apoya en formación, materiales,
            difusión y un modelo preparado para ser replicado en otros
            entornos educativos.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {future.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] bg-[#fbfaf7] p-8"
            >
              <div
                className="mb-8 h-4 w-4 rounded-full"
                style={{ backgroundColor: item.color }}
              />

              <h3 className="text-2xl font-black text-[#082341]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2.5rem] bg-[#082341] px-8 py-12 text-center text-white lg:px-16">
          <p className="mx-auto max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
            El objetivo final es que El Llavero de Lucas se convierta en un
            referente en la educación de habilidades sociales.
          </p>
        </div>
      </div>
    </section>
  );
}