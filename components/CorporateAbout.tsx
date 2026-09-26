export default function CorporateAbout() {
  return (
    <section
      id="corporativo"
      className="relative overflow-hidden bg-[#fbfaf7] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          
          {/* COLUMNA IZQUIERDA */}
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-[#1476c8]">
              El programa
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#082341] sm:text-5xl">
              ¿Qué es El Llavero de Lucas Corporativo?
            </h2>

            <div className="mt-8 h-1 w-20 rounded-full bg-[#f5b400]" />
          </div>

          {/* COLUMNA DERECHA */}
          <div>
            <p className="text-lg leading-8 text-slate-600">
              El Llavero de Lucas Corporativo nace como una propuesta
              estratégica diseñada para potenciar las competencias clave y la
              Disciplina Positiva Corporativa en equipos de trabajo.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              En un entorno dinámico y exigente, donde la gestión del estrés,
              la comunicación y la falta de cohesión pueden dificultar el
              rendimiento, este programa integra metodologías pedagógicas
              avanzadas, planes adaptados por perfiles profesionales y
              mecanismos de evaluación detallados para asegurar un impacto
              real y sostenible en la organización.
            </p>
          </div>
        </div>

        {/* METÁFORA DEL LLAVERO */}
        <div className="mt-20 overflow-hidden rounded-[2.5rem] bg-[#082341] p-8 text-white sm:p-12 lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            
            <div>
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-[#f5b400]">
                <div className="h-10 w-10 rounded-full border-4 border-white" />
              </div>

              <p className="mt-8 text-sm font-black uppercase tracking-[0.2em] text-[#f5b400]">
                Una metáfora práctica
              </p>

              <h3 className="mt-3 text-3xl font-black sm:text-4xl">
                Competencias que abren puertas.
              </h3>
            </div>

            <div>
              <p className="text-lg leading-8 text-white/75">
                El programa se basa en la metáfora de un llavero que custodia
                competencias fundamentales. Cada{" "}
                <strong className="text-white">“llave”</strong> representa una
                habilidad blanda{" "}
                <span className="italic">(soft skill)</span> indispensable para
                el entorno laboral.
              </p>

              <p className="mt-6 text-lg leading-8 text-white/75">
                Más que un aprendizaje teórico, simboliza la capacidad de abrir
                puertas hacia un{" "}
                <strong className="text-white">liderazgo consciente</strong>, un{" "}
                <strong className="text-white">
                  clima laboral saludable
                </strong>{" "}
                y la consecución de{" "}
                <strong className="text-white">
                  objetivos estratégicos
                </strong>.
              </p>
            </div>
          </div>
        </div>

        {/* PERFILES */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7">
            <span className="text-sm font-black text-[#1476c8]">01</span>
            <h3 className="mt-4 text-xl font-black text-[#082341]">
              Mandos intermedios
            </h3>
            <p className="mt-3 leading-7 text-slate-500">
              Desarrollo de competencias adaptadas a la gestión y coordinación
              de equipos.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7">
            <span className="text-sm font-black text-[#55a630]">02</span>
            <h3 className="mt-4 text-xl font-black text-[#082341]">
              Profesionales
            </h3>
            <p className="mt-3 leading-7 text-slate-500">
              Herramientas para mejorar comunicación, colaboración y
              desempeño profesional.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7">
            <span className="text-sm font-black text-[#ef5b22]">03</span>
            <h3 className="mt-4 text-xl font-black text-[#082341]">
              Equipos operacionales
            </h3>
            <p className="mt-3 leading-7 text-slate-500">
              Contenidos y dinámicas adaptados al rol y grado de
              responsabilidad de cada participante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}