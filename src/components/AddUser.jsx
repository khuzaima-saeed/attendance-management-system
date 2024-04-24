import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { collection, setDoc, doc } from "firebase/firestore"; 
import { db } from "@/app/firebase";
import { useAuth } from '@/context/AuthContext'
import {generatePassword} from 'secure-password-utilities';
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "@/app/firebase"
// import { useRouter } from "next/navigation";


const Add = ({ employees, setEmployees, setIsAdding, getEmployees }) => {

    const { signup,updateProfile } = useAuth()



  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [date, setDate] = useState('');

  // const router = useRouter();

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !role || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const fullName = `${firstName} ${lastName}`; 

    const newEmployee = {
      firstName,
      lastName,
      email,
      role,
      date,
    };

    console.log(newEmployee)

    employees.push(newEmployee);

    try {

        const password = generatePassword(12);
        const userCredential = await signup(newEmployee.email, password);
        const userId = userCredential.user.uid;

        

        await setDoc(doc(db, "employees", userId), {
            ...newEmployee,
          });

        // await db.collection("employees").doc(userId).set({
        //     ...newEmployee
        // });
        



    //   await addDoc(collection(db, "employees"), {
    //     userId,
    //     ...newEmployee
    //   });

      sendPasswordResetEmail(auth, email).then((a) => {

        Swal.fire({
            icon: 'success',
            title: 'Password Reset Email!',
            text: `${firstName} ${lastName}'s password reset email has been sent!`,
            showConfirmButton: false,
            timer: 500,
          });
        
      });



    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An error occurred. Please try again.',
        showConfirmButton: true,
      });



    }

    setEmployees(employees);
    setIsAdding(false);
    getEmployees()

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (

    // <div className="small-container">
    //   <form onSubmit={handleAdd}>
    //     <h1>Add Employee</h1>
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
    //       <input type="submit" value="Add" />
    //       <input
    //         style={{ marginLeft: '12px' }}
    //         className="muted-button"
    //         type="button"
    //         value="Cancel"
    //         onClick={() => setIsAdding(false)}
    //       />
    //     </div>
    //   </form>
    // </div>

    <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="bg-gray-800 text-white p-8 rounded-lg">
          <form onSubmit={handleAdd} className="flex flex-col space-y-4">
            <h1 className="text-2xl font-semibold">Add Employee</h1>
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-lg">First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                className="bg-gray-700 text-white rounded-md py-2 px-4"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-lg">Last Name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                className="bg-gray-700 text-white rounded-md py-2 px-4"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-gray-700 text-white rounded-md py-2 px-4"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="role" className="text-lg">Role</label>
              <input
                id="role"
                type="text"
                name="role"
                value={role}
                onChange={e => setRole(e.target.value)}
                className="bg-gray-700 text-white rounded-md py-2 px-4"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="date" className="text-lg">Date</label>
              <input
                id="date"
                type="date"
                name="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="bg-gray-700 text-white rounded-md py-2 px-4"
              />
            </div>
            <div className="flex justify-center items-center space-x-4">
              <input type="submit" value="Add" className="bg-green-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-green-600" />
              <input
                className="bg-red-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-red-600"
                type="button"
                value="Cancel"
                onClick={() => setIsAdding(false)}
              />
            </div>
          </form>
        </div>
      </div>





  );
};

export default Add;