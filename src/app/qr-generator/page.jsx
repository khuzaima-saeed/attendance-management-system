// import React from "react";
// import QRCode from "qrcode.react";
// import { useAuth } from "@/context/AuthContext";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/app/firebase";

// const QRGenerator = () => {
//   const { user } = useAuth();

//   const generateQRData = async () => {
//     if (!user) return;

//     const employeeDoc = doc(db, 'employees', user.uid);
//     const employeeSnapshot = await getDoc(employeeDoc);
//     let employeeName = "Unknown";
//     if (employeeSnapshot.exists()) {
//       const { firstName, lastName } = employeeSnapshot.data();
//       employeeName = `${firstName} ${lastName}`;
//     }

//     // Generate QR code data
//     const qrData = JSON.stringify({
//       id: user.uid,
//       email: user.email,
//       name: employeeName
//     });
    
//     return qrData;
//   };

//   return (
//     <main className="p-8">
//       <div>This is QR Generation Page</div>
//       <GenerateQR generateQRData={generateQRData} />
//     </main>
//   );
// };

// const GenerateQR = ({ generateQRData }) => {
//   const [qrData, setQRData] = React.useState(null);

//   React.useEffect(() => {
//     generateQRData().then(data => setQRData(data));
//   }, []);

//   return (
//     <div>
//       {qrData ? (
//         <div>
//           <QRCode value={qrData} />
//           <p>{qrData}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default QRGenerator;







"use client"
import React from "react";
import QRCode from "qrcode.react";
import { useAuth } from "@/context/AuthContext";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import Link from "next/link";





const QRGenerator = () => {

  const { user } = useAuth();

  const generateQRData = async () => {
    if (!user) return;


    const today = new Date().toLocaleDateString();
    const q = query(
      collection(db, "attendance"),
      where("employeeId", "==", user.uid),
      where("date", "==", today)
    );
    const snapshot = await getDocs(q);
    const attendanceType = snapshot.empty ? "check-in" : "check-out";





    const employeeDoc = doc(db, 'employees', user.uid);
    const employeeSnapshot = await getDoc(employeeDoc);
    let employeeName = "Unknown";
    if (employeeSnapshot.exists()) {
      const { firstName, lastName } = employeeSnapshot.data();
      employeeName = `${firstName} ${lastName}`;
    }

    // Generate QR code data
    const qrData = JSON.stringify({
      id: user.uid,
      email: user.email,
      name: employeeName,
      attendanceType: attendanceType
    });
    
    return qrData;
  };

  

 



  return (
    // <main className="p-8">
    //   <div>This is QR Generation Page</div>
    //   <GenerateQR generateQRData={generateQRData} />
    // </main>
    <main className="bg-gray-900 text-white p-8 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Generated QR</h1>
      <GenerateQR generateQRData={generateQRData} />
      <Link href="/">
        <button className="mt-8 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Back</button>
      </Link>
    </main>
  );
};


const GenerateQR = ({ generateQRData }) => {
  const [qrData, setQRData] = React.useState(null);

  React.useEffect(() => {
    generateQRData().then(data => setQRData(data));
  }, []);

  return (
    // <div>
    //   {qrData ? (
    //     <div>
    //       <QRCode value={qrData} />
    //       <p>{qrData}</p>
    //     </div>
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    // </div>
    <div className="w-full max-w-md flex flex-col items-center">
      {qrData ? (
        <div className="flex flex-col items-center">
          <QRCode value={qrData} size={256}/>
          {/* <p className="mt-4">{qrData}</p> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};







export default QRGenerator;