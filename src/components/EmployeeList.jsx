// EmployeeList.jsx
import { Link, useNavigate } from "react-router-dom";

export default function EmployeeList({ employees }) {
  const navigate = useNavigate();

  // Redirect to form with selected employee data for editing
  const handleEditClick = (employee) => {
    navigate("/add-employee", { state: { editingEmployee: employee } });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Employee List
      </h2>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="p-2 border-b">Name</th>
            <th className="p-2 border-b">Email</th>
            <th className="p-2 border-b">Department</th>
            <th className="p-2 border-b">Status</th>
            <th className="p-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((person) => (
            <tr key={person.id} className="hover:bg-gray-50">
              <td className="p-2 border-b text-blue-600 hover:underline">
                {/* Navigate to details page */}
                <Link to={`/employees/${person.id}`}>{person.name}</Link>
              </td>
              <td className="p-2 border-b">{person.email}</td>
              <td className="p-2 border-b">{person.department}</td>
              <td className="p-2 border-b">{person.status}</td>
              <td className="p-2 border-b">
                <button
                  onClick={() => handleEditClick(person)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
