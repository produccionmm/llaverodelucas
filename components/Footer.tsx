export default function Footer() {
  return (
    <footer className="bg-[#061a30] px-6 py-10 text-white lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <a href="#inicio">
          <p className="font-black tracking-[0.12em]">
            EL LLAVERO DE LUCAS
          </p>

          <p className="mt-1 text-sm text-white/50">
            Proyecto educativo
          </p>
        </a>

        <div className="flex flex-wrap gap-6 text-sm font-semibold text-white/60">
          <a href="#proyecto" className="transition hover:text-white">
            El proyecto
          </a>

          <a href="#llaves" className="transition hover:text-white">
            Las llaves
          </a>

          <a href="#programas" className="transition hover:text-white">
            Programas
          </a>

          <a href="#contacto" className="transition hover:text-white">
            Contacto
          </a>
        </div>

        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} El Llavero de Lucas
        </p>
      </div>
    </footer>
  );
}