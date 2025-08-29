// EmployeeForm.jsx
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function EmployeeForm({ onSubmit }) {
  const location = useLocation();

  // If we came here to edit, this will hold that employee
  const employeeToEdit = location.state?.editingEmployee || null;

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
    dateOfJoining: "",
    status: "Active",
  });

  // Departments dropdown options
  const departmentOptions = [
    "Engineering",
    "HR",
    "Finance",
    "Marketing",
    "Sales",
    "Operations",
  ];

  // If editing, fill form with existing data
  useEffect(() => {
    if (employeeToEdit) {
      setFormData(employeeToEdit);
    }
  }, [employeeToEdit]);

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email) {
      alert("Name and Email are required!");
      return;
    }

    // Call parent function
    onSubmit(formData);

    // Clear form if adding a new employee
    if (!employeeToEdit) {
      setFormData({
        name: "",
        email: "",
        department: "",
        role: "",
        dateOfJoining: "",
        status: "Active",
      });
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-3">
        {employeeToEdit ? "Edit Employee" : "Add Employee"}
      </h2>

      <form onSubmit={handleFormSubmit} className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Department */}
        <select
          name="department"
          value={formData.department}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">Select Department</option>
          {departmentOptions.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        {/* Role */}
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Date of Joining */}
        <input
          type="date"
          name="dateOfJoining"
          value={formData.dateOfJoining}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Status */}
        <select
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          {employeeToEdit ? "Update" : "Add"} Employee
        </button>
      </form>
    </div>
  );
}
