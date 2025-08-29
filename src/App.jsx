// App.jsx
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import SearchFilter from "./components/SearchFilter";
import EmployeeDetail from "./components/EmployeeDetail";
import employeesData from "./data/employees";

// Toast for success messages
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  // Local state
  const [employees, setEmployees] = useState(employeesData);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ department: "", status: "" });

  // Add new employee or update existing one
  const handleAddOrUpdate = (employee) => {
    if (editingEmployee) {
      // Update flow
      setEmployees((prev) =>
        prev.map((emp) => (emp.id === employee.id ? employee : emp))
      );
      toast.success("✅ Employee updated successfully!");
      setEditingEmployee(null);
    } else {
      // Add flow
      setEmployees((prev) => [
        ...prev,
        { ...employee, id: prev.length + 1 },
      ]);
      toast.success("🎉 Employee added successfully!");
    }
  };

  // Search + filter employees
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment = filter.department
      ? emp.department === filter.department
      : true;

    const matchesStatus = filter.status
      ? emp.status === filter.status
      : true;

    return matchesSearch && matchesDepartment && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top navigation */}
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <Routes>
          {/* Employees Page */}
          <Route
            path="/employees"
            element={
              <>
                <SearchFilter
                  search={search}
                  setSearch={setSearch}
                  filter={filter}
                  setFilter={setFilter}
                />
                <EmployeeList
                  employees={filteredEmployees}
                  onEdit={setEditingEmployee}
                />
              </>
            }
          />

          {/* Employee Details Page */}
          <Route
            path="/employees/:id"
            element={<EmployeeDetail employees={employees} />}
          />

          {/* Add Employee Page */}
          <Route
            path="/add-employee"
            element={
              <EmployeeForm
                onSubmit={handleAddOrUpdate}
                editingEmployee={editingEmployee}
              />
            }
          />

          {/* Reports Page (placeholder) */}
          <Route
            path="/reports"
            element={
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-700">
                  Reports Page
                </h2>
                <p className="text-gray-500 mt-2">
                  Reports feature will be available soon.
                </p>
              </div>
            }
          />

          {/* Default / Home Page */}
          <Route
            path="*"
            element={
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-700">
                  Welcome to Mini HRMS
                </h2>
                <p className="text-gray-500 mt-2">
                  Use the navigation bar to get started.
                </p>
              </div>
            }
          />
        </Routes>
      </div>

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}
