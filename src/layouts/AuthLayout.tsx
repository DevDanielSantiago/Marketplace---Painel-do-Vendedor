import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header simples para páginas de auth */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16 items-center">
            <h1 className="text-xl font-bold text-gray-900">
              Marketplace - Painel de Vendedor
            </h1>
          </div>
        </div>
      </header>

      {/* Conteúdo das páginas de auth */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
