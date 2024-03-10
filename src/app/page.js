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
    </main>
  );
}