// Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / App Name */}
        <h1 className="text-xl font-bold">Mini HRMS</h1>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link to="/employees" className="hover:text-gray-200">
              Employees
            </Link>
          </li>
          <li>
            <Link to="/add-employee" className="hover:text-gray-200">
              Add Employee
            </Link>
          </li>
          <li>
            <Link to="/reports" className="hover:text-gray-200">
              Reports
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
