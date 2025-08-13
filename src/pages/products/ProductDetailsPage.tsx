import { useParams } from "react-router-dom";

export function ProductDetailsPage() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Detalhes do Produto #{id}
      </h1>

      {/* TODO: Implementar detalhes do produto */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center text-gray-500">
          <p>Detalhes do produto em desenvolvimento...</p>
        </div>
      </div>
    </div>
  );
}
