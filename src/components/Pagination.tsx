import { useCompany } from "../context/CompanyContext";

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages,filteredCompanies  } = useCompany();
if (filteredCompanies.length === 0) return null;

  return (
    <div className="flex justify-center gap-2 mt-6">
      
      {/* Prev */}
      <button
        onClick={() => setCurrentPage((p) => p - 1)}
        disabled={currentPage === 1}
       className={`px-3 py-1 border rounded-lg ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-1 border rounded-lg ${
            currentPage === i + 1 ? "bg-blue-500 text-white" : "hover:bg-gray-100"
          }`}
        >
          {i + 1}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => setCurrentPage((p: number) => p + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 border rounded-lg ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;