// EmployeeDetail.jsx
import { useParams, useNavigate } from "react-router-dom";

export default function EmployeeDetail({ employees }) {
  const { id } = useParams(); // Get employee id from URL
  const navigate = useNavigate();

  // Find the employee based on id
  const selectedEmployee = employees.find(
    (person) => person.id === parseInt(id)
  );

  // If employee not found, show a friendly message
  if (!selectedEmployee) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Employee Not Found
        </h2>
        <button
          onClick={() => navigate(-1)} // go back to previous page
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-700">
        {selectedEmployee.name}
      </h2>
      <p>
        <strong>Email:</strong> {selectedEmployee.email}
      </p>
      <p>
        <strong>Department:</strong> {selectedEmployee.department}
      </p>
      <p>
        <strong>Status:</strong> {selectedEmployee.status}
      </p>

      <button
        onClick={() => navigate("/employees")} // back to full list
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Back to Employee List
      </button>
    </div>
  );
}
