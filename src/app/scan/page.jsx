// // // 'use client'
// // // import React, { useState, useRef } from "react";
// // // import { QrReader } from "react-qr-reader";
// // // // import { useRouter } from "next/router";
// // // import Head from "next/head";
// // // import Link from "next/link";
// // // // import axios from "axios";

// // // export default function Scan() {
// // //   // const router = useRouter();
// // //   const [data, setData] = useState("No result");
// // //   const [showModal, setShowModal] = useState(false);
// // //   const qrRef = useRef(null);
// // //   const [scannerActive, setScannerActive] = useState(true);

// // //   const handleScan = (result, error) => {

// // //     console.log(qrRef.current)




// // //     if (!!result) {
// // //       setData(result?.text);
// // //       setShowModal(true);
// // //       setScannerActive(false);
// // //     }

// // //     if (!!error) {
// // //       console.info(error);
// // //     }
// // //   };

// // //   const handleCloseModal = () => {
// // //     setShowModal(false);
// // //     // router.reload();
// // //     // setScannerActive(true); // Start scanner again
// // //     setScannerActive(true);
// // //   };

// // //   const handleOK =  () => {
// // //     // await axios.post(`/api/postData`, { data });
// // //     // router.reload();
// // //     console.log(qrRef)
// // //     if (scannerActive) {
// // //       setScannerActive(false); // Stop scanner
// // //       qrRef.current.stop();
// // //     }
// // //     console.log("Scanned something")
// // //     console.log(data)
// // //     router.push('/')
// // //   };

// // //   return (
// // //     <>
// // //       <Head>
// // //         <title>QR Scan</title>
// // //         <meta name="description" content="Generated by create next app" />
// // //         <meta name="viewport" content="width=device-width, initial-scale=1" />
// // //         <link rel="icon" href="/favicon.ico" />
// // //       </Head>
// // //       <main className="flex flex-col mt-[5rem] justify-center items-center">
// // //         <div className="flex flex-col justify-center items-center">
// // //           <h1 className="text-4xl font-bold mb-4">QR Scanner</h1>
// // //           <div>

// // //             <QrReader
// // //               className="lg:h-[400px] lg:w-[400px] h-[300px] w-[300px]"
// // //               onResult={handleScan}
// // //               constraints={{ facingMode: "environment" }}
// // //               style={{ width: "40%", height: "40%" }}
// // //               ref={qrRef}
// // //             />
            

// // //             {/* {scannerActive && (
// // //               <QrReader
// // //                 className="lg:h-[400px] lg:w-[400px] h-[300px] w-[300px]"
// // //                 onResult={handleScan}
// // //                 constraints={{ facingMode: "environment" }}
// // //                 style={{ width: "40%", height: "40%" }}
// // //               />
// // //             )} */}





// // //           </div>
// // //           <Link
// // //             href={`/`}
// // //             className=" bg-yellow-200 m-4 text-md rounded-md px-4 py-2 hover:underline"
// // //           >
// // //             Back to home..
// // //           </Link>
// // //           {showModal && (
// // //             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// // //               <div className="bg-black rounded-md p-4">
// // //                 <p className="text-xl font-bold mb-2">Scanned data:</p>
// // //                 <p>{data}</p>
// // //                 <button
// // //                   className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mt-4 hover:bg-gray-300"
// // //                   onClick={handleCloseModal}
// // //                 >
// // //                   Close
// // //                 </button>
// // //                 <button
// // //                   className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mx-4 mt-4 hover:bg-gray-300"
// // //                   onClick={handleOK}
// // //                 >
// // //                   Ok
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </main>
// // //     </>
// // //   );
// // // }






// // 'use client'
// // import React, { useState, useRef } from "react";
// // import { QrReader } from "react-qr-reader";
// // import {QrScanner} from '@yudiel/react-qr-scanner';



// // export default function Scan() {
// //   // const router = useRouter();
// //   const [result, setResult] = useState('');
// //   const qrRef = useRef(null);
// //   const [isScannerActive, setIsScannerActive] = useState(true);


// //   const handleScan = (data) => {
// //     if (data) {
// //       setResult(data);
// //     }
// //   };

// //   const handleError = (err) => {
// //     console.error(err);
// //   };

// //   const handleProceed = () => {
// //     console.log("hello")
// //     console.log(result)

// //     setIsScannerActive(false);

// //   };

  

// //   return (
// //     // <>
// //     //   <div>
// //     //     <h1>QR Code Scanner</h1>
      
// //     //     {isScannerActive && (
// //     //         <QrReader
// //     //           ref={qrRef}
// //     //           className="lg:h-[400px] lg:w-[400px] h-[300px] w-[300px]"
// //     //           delay={300}
// //     //           onResult={handleScan}
// //     //           constraints={{ facingMode: "environment" }}
// //     //           style={{ width: "40%", height: "40%" }}
              
// //     //         />
// //     //         )}










// //     //     <p className="text-white">world</p>
// //     //     <button onClick={handleProceed}>Proceed</button>
// //     //   </div>
// //     // </>



// //     <>


// //         <QrScanner
// //               onDecode={(result) => console.log(result)}
// //               onError={(error) => console.log(error?.message)}
// //           />



// //       </>









// //   );
// // }










// // 'use client'
// // import React, { useState } from 'react';
// // import QrScanner from '@/components/QrScanner';
// // import { useRouter } from 'next/navigation';
// // import { useEffect } from 'react';

// // const QRCodeScanner = ({username}) => {
// //   const router = useRouter();
// //     const [qrResult, setQRResult] = useState(null);
// //     const [isCameraStopped, setIsCameraStopped] = useState(false);

// //     const handleResult = (result) => {
// //         // setQRResult(result);
// //         setQRResult(`${username}: ${result}`);
// //     };

// //     const handleClosePopup = () => {
// //         setQRResult(null);
// //     };

// //     const handleStopCamera = () => {
// //         console.log("hello")
// //         setIsCameraStopped(true);
// //         console.log(isCameraStopped)
// //         router.push('/');
// //     };


// //     useEffect(() => {
// //       return () => {
// //           // Cleanup when component unmounts
// //           setIsCameraStopped(true); 
// //       };
// //   }, []);

// //     return (
// //         <div>
// //             <QrScanner
// //                 onResult={handleResult}
// //                 stopDecoding={isCameraStopped}
// //             />
// //             {qrResult && (
// //                 <Popup result={qrResult} onClose={handleClosePopup} />
// //             )}
// //             <button onClick={handleStopCamera}>Stop Camera</button>
// //         </div>
// //     );
// // };

// // const Popup = ({ result, onClose }) => {
// //     return (
// //         <div className="popup">
// //             <div className="popup-inner">
// //                 <h2>QR Code Result</h2>
// //                 <p>{result}</p>
// //                 <button onClick={onClose}>Close</button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default QRCodeScanner;












// // "use client"
// // import React, { useState } from 'react'
// // import QrScanner from 'qr-scanner';
// "use client"
// import WebcamScanner from '@/components/QrScanner';
// import Link from 'next/link'
// import { useAuth } from "@/context/AuthContext";
// import {collection, addDoc, query, where, getDocs, doc, getDoc} from "firebase/firestore"
// import { db } from "@/app/firebase";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';


// const Scan = () => {

//     const { user } = useAuth();
//     const [errorMessage, setErrorMessage] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const router = useRouter();
//     const [scanning, setScanning] = useState(true); 


//     const handleScan = async (data) => {

//       console.log("The data is: ",data);
//         setIsLoading(true); // Set loading state
//         try {
//         // const buildingCode = extractBuildingCodeFromData(data); // Assuming a function to parse building code
//           if (!scanning) return;
//           console.log("The data is: ",data);

//           if (data == "Test QR"){
      
//           if (!user) {
//               setErrorMessage("Please sign in to mark attendance");
//               return;
//           }
      
//           const today = new Date().toLocaleDateString(); // Format date consistently
//           const q = query(collection(db, "attendance"), where("employeeId", "==", user.uid), where("date", "==", today));
//           const snapshot = await getDocs(q);
      
//           if (snapshot.empty) {


//             const employeeDoc = doc(db, 'employees', user.uid);
//             const employeeSnapshot = await getDoc(employeeDoc);
//             let employeeName = "Unknown";
//             if (employeeSnapshot.exists()) {
//                 const { firstName, lastName } = employeeSnapshot.data();
//                 employeeName = `${firstName} ${lastName}`;
//             }


//               // No existing record for today - add attendance
//               await addDoc(collection(db, "attendance"), {
//                 employeeId: user.uid,
//                 employeeName: employeeName,
//                 email:user.email,
//                 date: today,
//                 timeIn: new Date().toLocaleTimeString(),
//                 timeOut: null,
//               });
//               setScanning(false);
//               console.log("Attendance marked successfully!");
//           } else {
//               console.log("Attendance already marked for today.");
//           }
//           router.push("/")
//           }else{
//               console.log("Invalid QR code");
             
//           }
      
//         } catch (error) {
//         console.error("Error adding attendance:", error);
//         const message = error.message || "An error occurred. Please try again."; 
//         setErrorMessage(message);
//         // setScanned(false);
//         } finally {
//         setIsLoading(false); 
//         // setScanning(true); 
//         }
//     };


//   return (
//     <div>
//       <WebcamScanner onScanned={handleScan} active={scanning} />
//       <Link href="/dashboard">
//         <button>Proceed</button>
//       </Link>
//       {errorMessage && <p className="text-black">{errorMessage}</p>}
//       {isLoading && <p className='text-black'>Marking attendance...</p>}
//     </div>
    
//   )
// }

// export default Scan




// "use client"
// import React, { useState, useEffect,useRef } from 'react';
// import { QrReader } from "react-qr-reader";
// import { useRouter } from 'next/navigation';

// const Scan = () => {
//  const [data, setData] = useState("No result");
//  const router = useRouter();
//  const [isScanning, setIsScanning] = useState(true); // Control scanner activation
//  const qrRef = useRef(null);


//  useEffect(() => {
  
//   return () => {
//     // qrRef.current?.stop();
//     // qrRef.current.destroy();
//   };
// }, []);


 

//  return (
//     <>
//       {(
//         <QrReader
//           onResult={(result, error) => {
//             console.log("Result object:", result);
//             if (result) {
//               console.log("Scanned data:", result.text);
//               setData(result.text);
//               if (result.text === "Hello world") {
//                 setData("Stop scanning");
//                 setIsScanning(false);
//                 qrRef.current?.stop(); 
//                 router.push('/');
//               }
//             }

//             if (error) {
//               console.info(error);
//             }
//           }}
//           constraints={{ facingMode: "user" }}
//           className="w-60"
//           ref={qrRef}
          
//         />
//       )}
//       <p>{data}</p>
//     </>
//  );
// };

// export default Scan;










"use client";
import React from "react";
import { useEffect, useState,useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import QrScanner from 'qr-scanner';
import { useAuth } from "@/context/AuthContext";
import {collection, addDoc, query, where, getDocs, doc, getDoc, updateDoc} from "firebase/firestore"
import { db } from "@/app/firebase";




export default function MarkAttendence() {

  const router = useRouter();
  const [isQrInitialized, setIsQrInitialized] = useState(false);
  const qrRef = useRef(null);
  const { user } = useAuth();

  const Searchparams = useSearchParams();
  const page_query = Searchparams.get("query");

  console.log("The query is: ",page_query)

  

 

  useEffect(() => {
  
    return () => {
      if (qrRef.current !== null) {
        console.log("Inside if to destroy")
        qrRef.current.stop(); // Stop the QR scanner
        qrRef.current.destroy(); // Destroy the QR scanner
        qrRef.current = null;
        setIsQrInitialized(false); // Reset the QR scanner initialization state
      }
    };
  }, []);


  useEffect(() => {
    console.log("Setting up the scanner")
    setUpQrScanner();
  }, []);

  const setUpQrScanner = () => {


    if (document === null) return;

    const videoElem = document.querySelector('video');
    if (videoElem === null) return;

    if (isQrInitialized) return;
    setIsQrInitialized(true);
    console.log("Inside setupqrscanner")
    const qrScanner = new QrScanner(
      videoElem,
      async(result) => {
        console.log(result.data);
        qrScanner.stop();
        qrScanner.destroy();
        setIsQrInitialized(false);
        qrRef.current = null

        if (result.data === "Hello world") {
          //If for hello starts here

          if (page_query === "checkin"){




          console.log("Valid QR code")


          const employeeDoc = doc(db, 'employees', user.uid);
          const employeeSnapshot = await getDoc(employeeDoc);
          let employeeName = "Unknown";
          console.log("The employee snapshot is: ",employeeSnapshot)
          if (employeeSnapshot) {
              const { firstName, lastName } = employeeSnapshot.data();
              employeeName = `${firstName} ${lastName}`;
          }

          console.log("The employee name is: ",employeeName)

          const today = new Date().toLocaleDateString();


          await addDoc(collection(db, "attendance"), {
                employeeId: user.uid,
                employeeName: employeeName,
                email:user.email,
                date: today,
                timeIn: new Date().toLocaleTimeString(),
                timeOut: null,
              });

            }

            else if (page_query === "checkout"){
              try {
                const today = new Date().toLocaleDateString();
                const q = query(collection(db, "attendance"), where("employeeId", "==", user.uid), where("date", "==", today));
                const snapshot = await getDocs(q);

                if (!snapshot.empty) {
                    const attendanceDoc = snapshot.docs[0];
                    const attendanceId = attendanceDoc.id;
                    const attendanceRef = doc(db, "attendance", attendanceId);

                    await updateDoc(attendanceRef, {
                        timeOut: new Date().toLocaleTimeString()
                    });

                    console.log("Checked out successfully!");
                } else {
                    console.log("No attendance record found for today.");
                }
            } catch (error) {
                console.error("Error checking out:", error);
            }

            }



        }//If for hello ends here






        
        router.push("/")
      },
      {}
    );

    qrRef.current = qrScanner;
    qrScanner.start();
  }

  

  return (
    // <div className="flex min-h-screen flex-col items-center justify-between p-4">
    //   <div className="overflow-x-auto">

    //     <video></video>
    //     <button onClick={() => router.push("/")}>Back</button>
    //   </div>
    // </div>
    
    <div className="flex flex-col items-center justify-center p-4 bg-gray-900 text-white h-screen">
      <div className="relative w-full h-3/4">
        <video id="qr-video" className="w-full h-full" autoPlay></video>
        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 bg-gray-800 py-2 px-4 rounded" onClick={() => router.push("/")}>Back</button>
      </div>
    </div>

   

  );
}