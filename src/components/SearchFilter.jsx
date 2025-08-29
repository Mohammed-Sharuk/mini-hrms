// SearchFilter.jsx
/* eslint-disable react/prop-types */

export default function SearchFilter({ search, setSearch, filter, setFilter }) {
  return (
    <div className="flex flex-wrap gap-4 items-center bg-white shadow-md rounded-lg p-4 mb-4">
      {/* Search by name or email */}
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {/* Department filter */}
      <select
        value={filter.department}
        onChange={(e) => setFilter({ ...filter, department: e.target.value })}
        className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="">All Departments</option>
        <option value="HR">HR</option>
        <option value="Engineering">Engineering</option>
        <option value="Sales">Sales</option>
      </select>

      {/* Status filter */}
      <select
        value={filter.status}
        onChange={(e) => setFilter({ ...filter, status: e.target.value })}
        className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
    </div>
  );
}
