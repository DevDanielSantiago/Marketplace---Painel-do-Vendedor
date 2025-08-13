export function ProductsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Produtos</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Novo Produto
        </button>
      </div>

      {/* TODO: Implementar lista de produtos */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 text-center text-gray-500">
          <p>Lista de produtos em desenvolvimento...</p>
        </div>
      </div>
    </div>
  );
}
