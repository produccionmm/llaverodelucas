export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#fbfaf7] px-6 py-28 lg:px-10"
    >
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-yellow-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[3rem] bg-[#082341]">
          <div className="grid lg:grid-cols-2">
            <div className="p-9 sm:p-12 lg:p-16">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f5b400]">
                Contacto
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                ¿Quieres llevar El Llavero de Lucas a tu centro?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                El proyecto está pensado para centros educativos, familias,
                AMPAs, entidades y administraciones interesadas en fortalecer
                las habilidades sociales y emocionales de los jóvenes.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Dot color="#1476c8" />
                <Dot color="#55a630" />
                <Dot color="#f5b400" />
                <Dot color="#ef5b22" />
                <Dot color="#a32473" />
              </div>
            </div>

            <div className="bg-white p-9 sm:p-12 lg:p-16">
              <form className="space-y-6">
                <Field label="Nombre" type="text" placeholder="Tu nombre" />

                <Field
                  label="Correo electrónico"
                  type="email"
                  placeholder="correo@ejemplo.com"
                />

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#082341]">
                    Centro o entidad
                  </label>

                  <input
                    type="text"
                    placeholder="Nombre del centro o entidad"
                    className="w-full rounded-2xl border border-slate-200 bg-[#fbfaf7] px-5 py-4 text-[#082341] outline-none transition focus:border-[#1476c8]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#082341]">
                    Mensaje
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Cuéntanos cómo podemos ayudarte"
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-[#fbfaf7] px-5 py-4 text-[#082341] outline-none transition focus:border-[#1476c8]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#082341] px-7 py-4 font-bold text-white transition hover:bg-[#12375d]"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#082341]">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-[#fbfaf7] px-5 py-4 text-[#082341] outline-none transition focus:border-[#1476c8]"
      />
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      className="h-4 w-4 rounded-full"
      style={{ backgroundColor: color }}
    />
  );
}