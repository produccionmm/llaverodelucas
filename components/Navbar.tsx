export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#082341] text-lg font-bold text-white">
            L
          </div>

          <div>
            <p className="text-sm font-extrabold tracking-[0.12em] text-[#082341]">
              EL LLAVERO
            </p>
            <p className="text-xs font-semibold text-slate-500">DE LUCAS</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
          <a className="transition hover:text-[#1476c8]" href="#proyecto">
            El proyecto
          </a>

          <a className="transition hover:text-[#1476c8]" href="#llaves">
            Las llaves
          </a>

          <a className="transition hover:text-[#1476c8]" href="#programas">
            Programas
          </a>

          <a className="transition hover:text-[#1476c8]" href="#contacto">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}