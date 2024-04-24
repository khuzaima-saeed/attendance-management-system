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




"use client"
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { collection, addDoc,query,where,getDocs } from "firebase/firestore"; 
import { db } from "@/app/firebase";
import { useRouter } from "next/navigation";


// const handleAdd = async() => {
//   try{
//     const docRef = await addDoc(collection(db, "employees"), {
//       name: "Muhammad Saad",
//       email: "saad@gmail.com",
//       phone: "0345-1234567",
//       address: "Karachi",
//     });
//     console.log("Document written with ID: ", docRef.id);

//   }
//   catch(e){
//     console.error("Error adding document: ", e);
//   }
  

// }


export default function Home() {
  const { user } = useAuth();
  const username = user?.email ? user.email : null;
  const [isAttendanceMarked, setIsAttendanceMarked] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const router = useRouter();

//   const handleCheckOut = () => {
//     router.push("/scan?query=checkout");
// };
const handleCheckOut = async () => {
  if (isAttendanceMarked) {
    const today = new Date().toLocaleDateString();
    const q = query(
      collection(db, "attendance"),
      where("employeeId", "==", user.uid),
      where("date", "==", today)
    );
    const snapshot = await getDocs(q);
    snapshot.forEach(async (doc) => {
      if (doc.data().timeOut != null) {
      
        alert("You have already checked out for today!");
        
      }else{
        router.push("/scan?query=checkout");
      }
      
    });
  } else {
    alert("You need to check in first!");
  }
};




const handleCheckIn = () => {
  // setIsCheckingOut(true);
  router.push("/scan?query=checkin");
};

  useEffect(() => {
    const checkAttendance = async () => {
      if (user) {
        const today = new Date().toLocaleDateString();
        const q = query(
          collection(db, "attendance"),
          where("employeeId", "==", user.uid),
          where("date", "==", today)
        );
        const snapshot = await getDocs(q);
        setIsAttendanceMarked(!snapshot.empty);
        

        const userDoc = await getDocs(query(collection(db, "employees"), where("email", "==", user.email)));
        if (!userDoc.empty) {
          setUserRole(userDoc.docs[0].data().role);
        }




      }
    };

    checkAttendance();
  }, [user]);

  return (


  <main className="bg-gray-900 text-white p-8 h-screen flex flex-col justify-center items-center">
    <div className="text-2xl font-bold">Welcome!</div>

      {isAttendanceMarked ? (
        <button onClick={handleCheckOut} className="mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Check Out</button>
      ) : (
        <button onClick={handleCheckIn} className="mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Check In</button>
      )}
    


    <Link href="/qr-generator" >
      <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
        Generate QR
      </button>
    </Link>


    {userRole === "admin" && (
        <>
          <Link href="/dashboard">
            <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Add User
            </button>
          </Link>

          <Link href="/adminpage">
            <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Admin Page
            </button>
          </Link>

          <Link href="/admin-scanner">
            <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Admin Scanner
            </button>
          </Link>
        </>
      )}

  </main>
  );
}