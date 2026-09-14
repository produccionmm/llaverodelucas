export default function EmpresasPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#082341] px-6 text-white">
      <div className="text-center">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#f5b400]">
          El Llavero de Lucas
        </p>

        <h1 className="text-5xl font-black sm:text-6xl">
          Empresas
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
          Próximamente desarrollaremos aquí el área dirigida a empresas.
        </p>

        <a
          href="/"
          className="mt-10 inline-block rounded-full bg-white px-7 py-4 font-bold text-[#082341]"
        >
          Volver al inicio
        </a>
      </div>
    </main>
  );
}