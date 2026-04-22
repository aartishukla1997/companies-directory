import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

interface Company {
  id: number;
  name: string;
  location: string;
  industry: string;
}
interface CompanyContextType {
  companies: Company[];
  filteredCompanies: Company[];
  search: string;
  setSearch: (v: string) => void;
  location: string;
  setLocation: (v: string) => void;
  industry: string;
  setIndustry: (v: string) => void;
  loading: boolean;
  error: string;
  setCurrentPage: (v: number) => void;
  currentPage: number;
  totalPages: number;
  paginatedCompanies: Company[];
  setSortOrder: (v: "asc" | "desc") => void;
  sortOrder: "asc" | "desc";
}

const CompanyContext = createContext<CompanyContextType | null>(null);


export const CompanyProvider = ({ children }: any) => {
   
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const itemsPerPage = 5;

  // API call
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:3001/companies");
        setCompanies(res.data);
      } catch (err) {
        setError("Failed to fetch companies");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter logic
  const filteredCompanies = companies.filter((c:any) => {
    return (
      c.name.toLowerCase().includes(search.toLowerCase()) &&
      (location ? c.location === location : true) &&
      (industry ? c.industry === industry : true)
    );
  });
//  sort logic 
  const sortedCompanies = [...filteredCompanies].sort((a, b) => {
  if (sortOrder === "asc") {
    return a.name.localeCompare(b.name);
  } else {
    return b.name.localeCompare(a.name);
  }
});

// Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;  
  const paginatedCompanies = sortedCompanies.slice(
  startIndex,
  startIndex + itemsPerPage
);
const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);


useEffect(() => {
  setCurrentPage(1);
}, [sortOrder]);

  return (
    <CompanyContext.Provider
      value={{
        companies,
        filteredCompanies,
        search,
        setSearch,
        location,
        setLocation,
        industry,
        setIndustry,
        loading,
        error,
        paginatedCompanies,
        setCurrentPage,
        currentPage,
        totalPages,
        setSortOrder,
        sortOrder,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

// custom hook
export const useCompany = () => {
  const context = useContext(CompanyContext);
  if (!context) throw new Error("useCompany must be used within Provider");
  return context;
};