import CompanyTable from './components/CompanyTable';
import Filters from './components/Filters';
import Pagination from './components/Pagination';

function App() {
  return (
  <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold mb-6 text-gray-800">
      Company Dashboard
    </h1>
      <div className="bg-white p-4 rounded-xl shadow mb-4">
    <Filters />
  </div>
     <div className="bg-white p-4 rounded-xl shadow">
    <CompanyTable />
  </div>
       <Pagination />
  </div>
  )
}

export default App
