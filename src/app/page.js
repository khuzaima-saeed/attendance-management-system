// import React from "react";
// // import { useAuth } from "@/context/AuthContext";


// export default function Home() {
//   // const { user } = useAuth();
//   var name = localStorage.getItem('name');
//   console.log(name)


//   return (
    
    
//     <main className="p-8">
      
      
//       <div>This is Home Page  </div>
     


//     </main>
//   );
// }




'use client'
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "@/app/firebase";

const handleAdd = async() => {
  try{
    const docRef = await addDoc(collection(db, "employees"), {
      name: "Muhammad Saad",
      email: "saad@gmail.com",
      phone: "0345-1234567",
      address: "Karachi",
    });
    console.log("Document written with ID: ", docRef.id);

  }
  catch(e){
    console.error("Error adding document: ", e);
  }
  

}


export default function Home() {
  // const [name, setName] = useState("");
  const { user } = useAuth();
  const username = user?.email ? user.email : null;

  // useEffect(() => {
  //   const storedName = localStorage.getItem("name");
  //   setName(storedName);
  // }, []); // Empty dependency array ensures the effect runs only once

  return (
    <main className="p-8">
      <div>This is Home Page: {username} </div>
      <Link href="/scan">
        <button>Scan</button>
      </Link>
      <Link href="/dashboard">
        <button>Add User Page</button>
      </Link>
      <button onClick={handleAdd}>Add Employee</button>
    </main>
  );
}