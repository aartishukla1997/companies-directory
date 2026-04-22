import { useCompany } from "../context/CompanyContext";

const CompanyTable = () => {
  const { loading, error, paginatedCompanies, sortOrder, setSortOrder } =
    useCompany();
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
              {/* <th className="p-3">Name</th> */}
              <th
                className="p-3 cursor-pointer"
                onClick={() =>
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                }
              >
                Name {sortOrder === "asc" ? "⬆" : "⬇"}
              </th>
              <th className="p-3">Location</th>
              <th className="p-3">Industry</th>
            </tr>
          </thead>

          <tbody>
            {!paginatedCompanies?.length ? (
              <tr>
                <td colSpan={3} className="text-center p-6 text-gray-500">
                  No companies found
                </td>
              </tr>
            ) : (
              paginatedCompanies?.map((c) => (
                <tr
                  key={c?.id}
                  className="border-b hover:bg-blue-50 transition cursor-pointer"
                >
                  <td className="p-3 font-medium text-gray-800">{c?.name}</td>
                  <td className="p-3 text-gray-600">{c.location}</td>
                  <td className="p-3">
                    <span className="px-2 py-1 text-sm rounded bg-blue-100 text-blue-600">
                      {c?.industry}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CompanyTable;
