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

import { collection, getDocs, doc, deleteDoc, query, where } from "firebase/firestore";
import { db,auth } from '@/app/firebase'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation';





const Dashboard = ({ setIsAuthenticated }) => {

  const { delete_user } = useAuth()


  const [employees, setEmployees] = useState();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

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

  const handleDelete =  (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(async result => {
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
    // <div className="container">
    //   <div>
    //     <button onClick={()=>{router.push("/")}}>Back</button>
    //   </div>
    //   {!isAdding && !isEditing && (
    //     <>
    //       {/* <Header
    //         setIsAdding={setIsAdding}
    //         setIsAuthenticated={setIsAuthenticated}
    //       /> */}
    //       <div style={{ marginTop: '30px', marginBottom: '18px' }}>
    //             <button onClick={() => setIsAdding(true)}>Add Employee</button>
    //         </div>
    //       <Table
    //         employees={employees}
    //         handleEdit={handleEdit}
    //         handleDelete={handleDelete}
    //       />
    //     </>
    //   )}
    //   {isAdding && (
    //     <Add
    //       employees={employees}
    //       setEmployees={setEmployees}
    //       setIsAdding={setIsAdding}
    //       getEmployees={getEmployees}
    //     />
    //   )}
    //   {isEditing && (
    //     <Edit
    //       employees={employees}
    //       selectedEmployee={selectedEmployee}
    //       setEmployees={setEmployees}
    //       setIsEditing={setIsEditing}
    //       getEmployees={getEmployees}
    //     />
    //   )}
    // </div>





    // <div className="bg-gray-800 min-h-screen text-white">
    //   <div className="container mx-auto p-4">
    //     <div>
    //       <button onClick={()=>{router.push("/")}} className="bg-gray-700 text-white py-2 px-4 rounded-lg">Back</button>
    //     </div>
    //     {!isAdding && !isEditing && (
    //       <>
    //         <div className="mt-8 mb-4">
    //           <button onClick={() => setIsAdding(true)} className="bg-green-500 text-white py-2 px-4 rounded-lg">Add Employee</button>
    //         </div>
    //         {/* <Table
    //           employees={employees}
    //           handleEdit={handleEdit}
    //           handleDelete={handleDelete}
    //         /> */}
    //         <table className="table-auto w-full">
    //           <thead>
    //             <tr>
    //               <th className="px-4 py-2">Id</th>
    //               <th className="px-4 py-2">First Name</th>
    //               <th className="px-4 py-2">Last Name</th>
    //               <th className="px-4 py-2">Email</th>
    //               <th className="px-4 py-2">Role</th>
    //               <th className="px-4 py-2">Date</th>
    //               <th className="px-4 py-2">Actions</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {employees && employees.map((employee, index) => (
    //               <tr key={index}>
    //                 <td className="border px-4 py-2">{index + 1}</td>
    //                 <td className="border px-4 py-2">{employee.firstName}</td>
    //                 <td className="border px-4 py-2">{employee.lastName}</td>
    //                 <td className="border px-4 py-2">{employee.email}</td>
    //                 <td className="border px-4 py-2">{employee.role}</td>
    //                 <td className="border px-4 py-2">{employee.date}</td>
    //                 <td className="border px-4 py-2">
    //                   <button onClick={() => handleEdit(employee.id)} className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-lg mr-2">Edit</button>
    //                   <button onClick={() => handleDelete(employee.id)} className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-lg">Delete</button>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </>
    //     )}
    //     {isAdding && (
    //       <Add
    //         employees={employees}
    //         setEmployees={setEmployees}
    //         setIsAdding={setIsAdding}
    //         getEmployees={getEmployees}
    //       />
    //     )}
    //     {isEditing && (
    //       <Edit
    //         employees={employees}
    //         selectedEmployee={selectedEmployee}
    //         setEmployees={setEmployees}
    //         setIsEditing={setIsEditing}
    //         getEmployees={getEmployees}
    //       />
    //     )}
    //   </div>
    // </div>




    <div className="bg-gray-800 min-h-screen text-white">
      <div className="container mx-auto p-4">
        <div>
          <button onClick={() => { router.push("/") }} className="bg-gray-700 text-white py-2 px-4 rounded-lg mb-4 w-full md:w-auto">Back</button>
        </div>
        {!isAdding && !isEditing && (
          <>
            <div className="mt-8 mb-4">
              <button onClick={() => setIsAdding(true)} className="bg-green-500 text-white py-2 px-4 rounded-lg w-full md:w-auto">Add Employee</button>
            </div>
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 hidden sm:table-cell">Id</th>
                    <th className="px-4 py-2 hidden sm:table-cell">First Name</th>
                    <th className="px-4 py-2 hidden sm:table-cell">Last Name</th>
                    <th className="px-4 py-2 hidden sm:table-cell">Email</th>
                    <th className="px-4 py-2 hidden sm:table-cell">Role</th>
                    <th className="px-4 py-2 hidden sm:table-cell">Date</th>
                    <th className="px-4 py-2 hidden sm:table-cell">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees && employees.map((employee, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2 hidden sm:table-cell">{index + 1}</td>
                      <td className="border px-4 py-2 hidden sm:table-cell">{employee.firstName}</td>
                      <td className="border px-4 py-2 hidden sm:table-cell">{employee.lastName}</td>
                      <td className="border px-4 py-2 hidden sm:table-cell">{employee.email}</td>
                      <td className="border px-4 py-2 hidden sm:table-cell">{employee.role}</td>
                      <td className="border px-4 py-2 hidden sm:table-cell">{employee.date}</td>
                      <td className="border px-4 py-2 hidden sm:table-cell">
                        <button onClick={() => handleEdit(employee.id)} className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-lg mr-2">Edit</button>
                        <button onClick={() => handleDelete(employee.id)} className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-lg">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Responsive table for mobile */}
              <div className="sm:hidden">
                {employees && employees.map((employee, index) => (
                  <div key={index} className="border border-gray-700 p-4 mb-4">
                    <div className="font-bold">Id: {index + 1}</div>
                    <div>First Name: {employee.firstName}</div>
                    <div>Last Name: {employee.lastName}</div>
                    <div>Email: {employee.email}</div>
                    <div>Role: {employee.role}</div>
                    <div>Date: {employee.date}</div>
                    <div className="mt-2">
                      <button onClick={() => handleEdit(employee.id)} className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-lg mr-2">Edit</button>
                      <button onClick={() => handleDelete(employee.id)} className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-lg">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
    </div>






  );
};

export default Dashboard;