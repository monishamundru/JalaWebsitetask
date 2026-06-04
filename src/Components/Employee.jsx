import axios from "axios";
import { useState, useEffect } from "react";

function Employee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);

  // GET Employees
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3002/employees"
      );

      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // DELETE Employee
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3002/employees/${id}`
      );

      fetchEmployees();
    } catch (error) {
      console.log(error);
    }
  };
  //Edit Employee
  const handleEdit = (employee) => {
    setFirstName(employee.firstName);
    setLastName(employee.lastName);
    setEmail(employee.email);

    setEditId(employee.id);
    };
    const handleUpdate = async () => {
    try {
        await axios.put(
        `http://localhost:3002/employees/${editId}`,
        {
            firstName,
            lastName,
            email,
        }
        );
        fetchEmployees();

        setFirstName("");
        setLastName("");
        setEmail("");

        setEditId(null);

        alert("Employee Updated");
    } catch (error) {
        console.log(error);
    }
    };
  // SAVE Employee
  const handleSave = async () => {
    if (!firstName || !lastName || !email) {
      alert("Please fill all fields");
      return;
    }

    const employee = {
      firstName,
      lastName,
      email,
    };

    try {
      await axios.post(
        "http://localhost:3002/employees",
        employee
      );

      alert("Employee Added");

      fetchEmployees();

      setFirstName("");
      setLastName("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Employee Page</h1>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      {editId ? (
        <button onClick={handleUpdate}>
            Update
        </button>
        ) : (
        <button onClick={handleSave}>
            Save
        </button>
        )}

      <hr />

      <h2>Employee List</h2>
      <h3>Total Employees: {employees.length}</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>

              <td>
                <button
                    onClick={() => handleEdit(employee)}
                >
                    Edit
                </button>
                </td>

              <td>
                <button
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;