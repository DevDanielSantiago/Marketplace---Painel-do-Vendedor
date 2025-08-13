export function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Dashboard - Painel de Vendedor
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Cards de estatísticas - TODO */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total de Vendas</h3>
          <p className="text-2xl font-bold text-gray-900">R$ 0,00</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Produtos</h3>
          <p className="text-2xl font-bold text-gray-900">0</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Pedidos</h3>
          <p className="text-2xl font-bold text-gray-900">0</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Avaliações</h3>
          <p className="text-2xl font-bold text-gray-900">0</p>
        </div>
      </div>

      {/* TODO: Implementar gráficos e demais funcionalidades */}
      <div className="text-center text-gray-500">
        <p>Dashboard em desenvolvimento...</p>
      </div>
    </div>
  );
}
