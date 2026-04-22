

const CompanyCard = ({ company, onClick }: any) => {
  return (
    <div
      onClick={() => onClick(company)}
      className="border p-4 rounded shadow hover:bg-gray-100 cursor-pointer"
    >
      <h2 className="font-bold">{company.name}</h2>
      <p>{company.location}</p>
      <p className="text-sm text-gray-500">{company.industry}</p>
    </div>
  );
};

export default CompanyCard;