// 'use client'
// import React, { useEffect, useState } from "react";

// export default function Dashboard() {
//   const [em, setem] = useState("");

//   useEffect(() => {
//     const storedName = localStorage.getItem("name");
//     setem(storedName);
//   }, []); // Empty dependency array ensures the effect runs only once

//   return (
//     <main className="p-8">
//       <div>This is Dashboard: {em} Currently stored in local storage</div>
//     </main>
//   );
// }


"use client"
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

// import Header from './Header';
import Table from '@/components/Table';
import Add from '@/components/AddUser';
import Edit from '@/components/EditUser';

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from '@/app/firebase'

const Dashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const getEmployees = async () => {
    const querySnapshot = await getDocs(collection(db, "employees"));
    const employees = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setEmployees(employees)
  }

  useEffect(() => {
    getEmployees()
  }, []);

  const handleEdit = id => {
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [employee] = employees.filter(employee => employee.id === id);

        deleteDoc(doc(db, "employees", id));

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const employeesCopy = employees.filter(employee => employee.id !== id);
        setEmployees(employeesCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          {/* <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          /> */}
          <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)}>Add Employee</button>
            </div>
          <Table
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
          getEmployees={getEmployees}
        />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
          getEmployees={getEmployees}
        />
      )}
    </div>
  );
};

export default Dashboard;