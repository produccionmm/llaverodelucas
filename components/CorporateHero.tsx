export default function CorporateHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#082341] px-6 py-24 text-white lg:px-10">
      {/* Fondos decorativos */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#1476c8]/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#f5b400]/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        
        {/* TEXTO */}
        <div>
          <a
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-white/60 transition hover:text-white"
          >
            ← El Llavero de Lucas
          </a>

          <div className="mb-6">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#f5b400]">
              Área Corporativa
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            El Llavero
            <span className="block">
              de{" "}
              <span className="text-[#1476c8]">L</span>
              <span className="text-[#55a630]">u</span>
              <span className="text-[#f5b400]">c</span>
              <span className="text-[#ef5b22]">a</span>
              <span className="text-[#a32473]">s</span>
            </span>
            <span className="mt-4 block text-2xl font-black uppercase tracking-[0.15em] text-[#f5b400] sm:text-3xl">
              Corporativo
            </span>
          </h1>

          <h2 className="mt-9 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl">
            Programa de Liderazgo, Inteligencia Emocional y Habilidades
            Directivas
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
            Una propuesta estratégica diseñada para potenciar las competencias
            clave y la Disciplina Positiva Corporativa en equipos de trabajo.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#corporativo"
              className="rounded-full bg-[#f5b400] px-7 py-4 text-sm font-black text-[#082341] transition hover:-translate-y-1"
            >
              Conoce el programa
            </a>

            <a
              href="#llaves-corporativas"
              className="rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Descubre las 9 llaves
            </a>
          </div>
        </div>

        {/* BLOQUE VISUAL */}
        <div className="relative">
          <div className="rounded-[3rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f5b400]">
              Habilidades que abren puertas
            </p>

            <div className="mt-10 space-y-5">
              {[
                ["01", "Liderazgo"],
                ["02", "Inteligencia emocional"],
                ["03", "Comunicación"],
                ["04", "Trabajo en equipo"],
                ["05", "Gestión del cambio"],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="flex items-center gap-5 border-b border-white/10 pb-5"
                >
                  <span className="text-sm font-black text-[#f5b400]">
                    {number}
                  </span>

                  <span className="text-xl font-bold">{title}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm leading-6 text-white/50">
              Formación práctica adaptada a los diferentes perfiles y niveles
              de responsabilidad de la organización.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}