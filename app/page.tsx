const logoUrl =
  "https://www.dropbox.com/scl/fi/ay70w6qja88x0fyuuynst/LogoDePingo.jpg?rlkey=ef4qaou14kj7dhmy0pl1lk0qo&st=telsatw9&raw=1";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7]">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-16 lg:px-10">
        
        {/* Fondos decorativos */}
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-purple-200/20 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl">
          
          {/* CABECERA */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <img
              src={logoUrl}
              alt="El Llavero de Lucas"
              className="mx-auto mb-7 h-32 w-32 rounded-3xl object-contain shadow-lg sm:h-40 sm:w-40"
            />

            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1476c8]">
            El Llavero de Lucas
            </p>

            <h1 className="text-4xl font-black tracking-tight text-[#082341] sm:text-5xl lg:text-6xl">
            Habilidades Sociales
            <span className="block text-[#f5b400]">&amp;</span>
           <span className="block">Disciplina Positiva</span>
          </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
           Dos áreas, un mismo objetivo: desarrollar habilidades que ayuden a
           personas, jóvenes y organizaciones a crecer de forma positiva.
            </p>
          </div>

          {/* DOS ÁREAS */}
          <div className="grid gap-6 lg:grid-cols-2">

            {/* EDUCACIÓN */}
            <a
              href="/educacion"
              className="group relative min-h-[380px] overflow-hidden rounded-[2.5rem] bg-[#082341] p-9 text-white shadow-xl transition duration-300 hover:-translate-y-2 sm:p-12"
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#1476c8]/30 blur-2xl" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em]">
                    Área educativa
                  </span>

                  <span className="text-3xl transition duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>

                <div className="mt-auto pt-24">
                  <div className="mb-5 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#1476c8]" />
                    <span className="h-3 w-3 rounded-full bg-[#55a630]" />
                    <span className="h-3 w-3 rounded-full bg-[#f5b400]" />
                    <span className="h-3 w-3 rounded-full bg-[#ef5b22]" />
                    <span className="h-3 w-3 rounded-full bg-[#a32473]" />
                  </div>

                  <h2 className="text-4xl font-black sm:text-5xl">
                    Educación
                  </h2>

                  <p className="mt-4 max-w-lg text-lg leading-7 text-white/70">
                    Habilidades sociales y emocionales para jóvenes de 8 a 18
                    años, centros educativos, familias y comunidad educativa.
                  </p>

                  <p className="mt-7 font-bold text-[#f5b400]">
                    Descubrir Educación →
                  </p>
                </div>
              </div>
            </a>

            {/* EMPRESAS */}
            <a
              href="/empresas"
              className="group relative min-h-[380px] overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-9 shadow-xl transition duration-300 hover:-translate-y-2 sm:p-12"
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#f5b400]/20 blur-2xl" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#082341]/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#082341]">
                    Área profesional
                  </span>

                  <span className="text-3xl text-[#082341] transition duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>

                <div className="mt-auto pt-24">
                  <div className="mb-5 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#1476c8]" />
                    <span className="h-3 w-3 rounded-full bg-[#55a630]" />
                    <span className="h-3 w-3 rounded-full bg-[#f5b400]" />
                    <span className="h-3 w-3 rounded-full bg-[#ef5b22]" />
                    <span className="h-3 w-3 rounded-full bg-[#a32473]" />
                  </div>

                  <h2 className="text-4xl font-black text-[#082341] sm:text-5xl">
                    Empresas
                  </h2>

                  <p className="mt-4 max-w-lg text-lg leading-7 text-slate-600">
                    Formación y desarrollo de habilidades para equipos,
                    profesionales y organizaciones.
                  </p>

                  <p className="mt-7 font-bold text-[#1476c8]">
                    Descubrir Empresas →
                  </p>
                </div>
              </div>
            </a>
          </div>

          <p className="mt-10 text-center text-sm font-semibold text-slate-400">
            El Llavero de Lucas · Habilidades que abren puertas
          </p>
        </div>
      </section>
    </main>
  );
}