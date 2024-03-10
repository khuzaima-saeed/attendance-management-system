// 'use client';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { auth } from '../firebase';

// export default function Signup() {

//     const router = useRouter();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordAgain, setPasswordAgain] = useState('');

// //   const signup = () => {
// //     createUserWithEmailAndPassword(auth, email, password);
// //   };


// const signup = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed up successfully
//         const user = userCredential.user;
//         console.log(user)
//         router.push('/signin');
//         // Redirect or perform any other actions after successful signup
//       })
//       .catch((error) => {
//         // Handle errors here
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // Display error message to the user or handle errors as needed
//       });
//   };





  
//   return (
//     <>
//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             className="mx-auto h-10 w-auto"
//             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//             alt="Your Company"
//           />
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
//             Sign Up
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <div className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
//                 Email
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
//                   Password
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
//                   Password Again
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="passwordAgain"
//                   name="passwordAgain"
//                   type="password"
//                   autoComplete="current-password"
//                   onChange={(e) => setPasswordAgain(e.target.value)}
//                   required
//                   className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 disabled={(!email || !password || !passwordAgain) || (password !== passwordAgain)}
//                 onClick={() => signup()}
//                 className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }




'use client'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '@/context/AuthContext'

const Signup = () => {
  const { user, signup } = useAuth()
  console.log('signup: ',signup)
  console.log(user)
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Signup</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          className='text-black'

            type="email"
            placeholder="Enter email"
            required
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  )
}

export default Signup