export default function Hero() {
  const logoUrl =
    "https://www.dropbox.com/scl/fi/ay70w6qja88x0fyuuynst/LogoDePingo.jpg?rlkey=ef4qaou14kj7dhmy0pl1lk0qo&st=telsatw9&raw=1";

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#fbfaf7] px-6 pt-28 lg:px-10"
    >
      <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#082341]/10 bg-white px-4 py-2 text-sm font-bold text-[#082341] shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#1476c8]" />

            Proyecto educativo para jóvenes de 8 a 18 años
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-[#082341] sm:text-6xl lg:text-7xl">
            El Llavero

            <span className="block">
              de{" "}
              <span className="text-[#1476c8]">L</span>
              <span className="text-[#55a630]">u</span>
              <span className="text-[#f5b400]">c</span>
              <span className="text-[#ef5b22]">a</span>
              <span className="text-[#a32473]">s</span>
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
             El proyecto "El llavero de Lucas" nace como una iniciativa
             innovadora orientada a fortalecer las habilidades sociales y emocionales de
             los jóvenes en un contexto donde las nuevas tecnologías, las presiones
             sociales y la falta de referentes positivos dificultan el desarrollo
             personal. Este proyecto va más allá de una propuesta original, integrando
             nuevas ideas, recursos pedagógicos, planes diferenciados por edades,
              mecanismos de evaluación detallados y propuestas de sostenibilidad para
             asegurar un impacto real y duradero en los jóvenes.
            </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#proyecto"
              className="rounded-full bg-[#082341] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#12375d]"
            >
              Conoce el proyecto
            </a>

            <a
              href="#llaves"
              className="rounded-full border border-[#082341]/15 bg-white px-7 py-4 text-sm font-bold text-[#082341] transition hover:border-[#1476c8] hover:text-[#1476c8]"
            >
              Descubre las 9 llaves
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative flex w-full max-w-[520px] items-center justify-center overflow-hidden rounded-[3rem] border border-white bg-white p-8 shadow-[0_30px_100px_rgba(15,35,65,0.12)]">
            <div className="absolute left-8 top-8 h-5 w-5 rounded-full bg-[#1476c8]" />
            <div className="absolute right-10 top-16 h-4 w-4 rounded-full bg-[#ef5b22]" />
            <div className="absolute bottom-12 left-12 h-4 w-4 rounded-full bg-[#55a630]" />
            <div className="absolute bottom-8 right-16 h-5 w-5 rounded-full bg-[#a32473]" />

            <img
              src={logoUrl}
              alt="Logo de El Llavero de Lucas"
              className="relative z-10 h-auto w-full max-w-[420px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}