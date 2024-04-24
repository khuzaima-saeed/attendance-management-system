import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { doc, setDoc } from "firebase/firestore"; 
import { db } from '@/app/firebase'

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing, getEmployees }) => {
  const id = selectedEmployee.id;

  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [role, setRole] = useState(selectedEmployee.role);
  const [date, setDate] = useState(selectedEmployee.date);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !role || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      firstName,
      lastName,
      email,
      role,
      date,
    };

    await setDoc(doc(db, "employees", id), {
      ...employee
    });

    setEmployees(employees);
    setIsEditing(false);
    getEmployees()

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    // <div className="small-container">
    //   <form onSubmit={handleUpdate}>
    //     <h1>Edit Employee</h1>
    //     <label htmlFor="firstName">First Name</label>
    //     <input
    //       id="firstName"
    //       type="text"
    //       name="firstName"
    //       value={firstName}
    //       onChange={e => setFirstName(e.target.value)}
    //     />
    //     <label htmlFor="lastName">Last Name</label>
    //     <input
    //       id="lastName"
    //       type="text"
    //       name="lastName"
    //       value={lastName}
    //       onChange={e => setLastName(e.target.value)}
    //     />
    //     <label htmlFor="email">Email</label>
    //     <input
    //       id="email"
    //       type="email"
    //       name="email"
    //       value={email}
    //       onChange={e => setEmail(e.target.value)}
    //     />
    //     <label htmlFor="role">Role</label>
    //     <input
    //       id="role"
    //       type="text"
    //       name="role"
    //       value={role}
    //       onChange={e => setRole(e.target.value)}
    //     />
    //     <label htmlFor="date">Date</label>
    //     <input
    //       id="date"
    //       type="date"
    //       name="date"
    //       value={date}
    //       onChange={e => setDate(e.target.value)}
    //     />
    //     <div style={{ marginTop: '30px' }}>
    //       <input type="submit" value="Update" />
    //       <input
    //         style={{ marginLeft: '12px' }}
    //         className="muted-button"
    //         type="button"
    //         value="Cancel"
    //         onClick={() => setIsEditing(false)}
    //       />
    //     </div>
    //   </form>
    // </div>


    <div className="bg-gray-800 min-h-screen text-white">
      <div className="container mx-auto p-4">
        <form onSubmit={handleUpdate}>
          <h1 className="text-2xl font-semibold mb-4">Edit Employee</h1>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium">Role</label>
            <input
              id="role"
              type="text"
              name="role"
              value={role}
              onChange={e => setRole(e.target.value)}
              className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium">Date</label>
            <input
              id="date"
              type="date"
              name="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md mr-2"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;