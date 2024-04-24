// // 'use client'
// // import React, {useState} from "react";
// // import { useRouter } from "next/navigation";
// // import { signIn } from "next-auth/react";




// // const SignIn = () => {

// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const router = useRouter();




// //   return (
// //     <>
// //       {/*
// //         This example requires updating your template:

// //         ```
// //         <html class="h-full bg-white">
// //         <body class="h-full">
// //         ```
// //       */}
// //       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
// //         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
// //           <img
// //             className="mx-auto h-10 w-auto"
// //             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
// //             alt="Your Company"
// //           />
// //           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
// //             Sign in to your account
// //           </h2>
// //         </div>

// //         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
// //           <form className="space-y-6" action="#" method="POST">
// //             <div>
// //               <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
// //                 Email address
// //               </label>
// //               <div className="mt-2">
// //                 <input
// //                   id="email"
// //                   name="email"
// //                   type="email"
// //                   autoComplete="email"
// //                     onChange={(e)=>setEmail(e.target.value)}
// //                   required
// //                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                 />
// //               </div>
// //             </div>

// //             <div>
// //               <div className="flex items-center justify-between">
// //                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
// //                   Password
// //                 </label>
// //                 <div className="text-sm">
// //                 <div onClick={() => router.push('/forgot-password')} className="cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300">
// //                     Forgot password?
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="mt-2">
// //                 <input
// //                   id="password"
// //                   name="password"
// //                   type="password"
// //                   autoComplete="current-password"
// //                   onChange={(e)=>setPassword(e.target.value)}
// //                   required
// //                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                 />
// //               </div>
// //             </div>

// //             <div>
// //               <button
// //                 onClick={() => signIn('credentials', {email, password, redirect: true, callbackUrl: '/'})}
// //                 disabled={!email || !password}
// //                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// //               >
// //                 Sign in
// //               </button>
// //             </div>
// //           </form>

// //           <p className="mt-10 text-center text-sm text-gray-500">
// //             Not a member?{' '}
            
// //           </p>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default SignIn








// 'use client';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import QRCodeScanner from '@/app/scan/page';


// export default function Signin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();
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
//             Sign in to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <div className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
//                 Email address
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
//                 <div className="text-sm">
//                   <div onClick={() => router.push('/forgot-password')} className="cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300">
//                     Forgot password?
//                   </div>
//                 </div>
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
//               <button
//                 onClick={() => { 
//                   // console.log("Button clicked")
//                   console.log('email', email)
//                   console.log('password', password)
//                   signIn('credentials', {email, password, redirect: true, callbackUrl: '/'})
//                 }}
//                 disabled={!email || !password}
//                 className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//               >
//                 Sign In
//               </button>
              
//             </div>
//           </div>

//           <p className="mt-10 text-center text-sm text-gray-400">
//             Not a member?{' '}
//             <button onClick={() => router.push('signup')} className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
//               Sign Up
//             </button>
//           </p>
//         </div>
//       </div>
//       {/* <QRCodeScanner username={email} /> */}
//     </>
//   )
// }




'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '@/context/AuthContext'

const Signin = () => {
    const router = useRouter();
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e) => {
    e.preventDefault()

    console.log("user: ",user)
    try {
      await login(data.email, data.password)
      console.log('logged in')
      localStorage.setItem('name', data.email);
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    // <div
    //   style={{
    //     width: '40%',
    //     margin: 'auto',
    //   }}
    // >
    //   <h1 className="text-center my-3 ">Login</h1>
    //   <Form onSubmit={handleLogin}>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control
    //         onChange={(e) =>
    //           setData({
    //             ...data,
    //             email: e.target.value,
    //           })
    //         }
    //         value={data.email}
    //         required
    //         type="email"
    //         placeholder="Enter email"
    //       />
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         onChange={(e) =>
    //           setData({
    //             ...data,
    //             password: e.target.value,
    //           })
    //         }
    //         value={data.password}
    //         required
    //         type="password"
    //         placeholder="Password"
    //       />
    //     </Form.Group>
    //     <Button variant="primary" type="submit">
    //       Login
    //     </Button>
    //   </Form>
    // </div>

    // <div
    //   className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white"
    // >
    //   <h1 className="text-3xl font-semibold mb-8">Login</h1>
    //   <div className="w-80">
    //     <Form onSubmit={handleLogin}>
    //       <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Label className="sr-only">Email address</Form.Label>
    //         <Form.Control
    //           onChange={(e) =>
    //             setData({
    //               ...data,
    //               email: e.target.value,
    //             })
    //           }
    //           value={data.email}
    //           required
    //           type="email"
    //           placeholder="Email address"
    //           className="bg-gray-900 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500 block w-full"
    //         />
    //       </Form.Group>

    //       <Form.Group className="mb-3" controlId="formBasicPassword">
    //         <Form.Label className="sr-only">Password</Form.Label>
    //         <Form.Control
    //           onChange={(e) =>
    //             setData({
    //               ...data,
    //               password: e.target.value,
    //             })
    //           }
    //           value={data.password}
    //           required
    //           type="password"
    //           placeholder="Password"
    //           className="bg-gray-900 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500 block w-full"
    //         />
    //       </Form.Group>
    //       <Button
    //         variant="primary"
    //         type="submit"
    //         className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //       >
    //         Login
    //       </Button>
    //     </Form>
    //   </div>
    // </div>


    <div
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white"
    >
      <h1 className="text-3xl font-semibold mb-8">Login</h1>
      <div className="w-80">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="sr-only">Email address</Form.Label>
            <Form.Control
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
              required
              type="email"
              placeholder="Email address"
              className="bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500 block w-full"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="sr-only">Password</Form.Label>
            <Form.Control
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
              required
              type="password"
              placeholder="Password"
              className="bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500 block w-full"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </Button>
        </Form>
      </div>
      {/* <p className="mt-6 text-center text-gray-400">
        Not a member?{' '}
        <button onClick={() => router.push('signup')} className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
          Sign Up
        </button>
      </p> */}
    </div>





  )
}

export default Signin