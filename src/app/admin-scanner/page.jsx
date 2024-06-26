"use client";
/* eslint-disable */

import React from "react";
import { useEffect, useState,useRef } from "react";
import { useRouter } from "next/navigation";
import QrScanner from 'qr-scanner';
import { collection, addDoc, query, where, getDocs, doc, updateDoc  } from "firebase/firestore";
import { db } from "@/app/firebase";


export default function AdminScanner() {
  const router = useRouter();
  const [isQrInitialized, setIsQrInitialized] = useState(false);
  const qrRef = useRef(null);

  useEffect(() => {
    return () => {
      if (qrRef.current !== null) {
        qrRef.current.stop(); // Stop the QR scanner
        qrRef.current.destroy(); // Destroy the QR scanner
        qrRef.current = null;
        setIsQrInitialized(false); // Reset the QR scanner initialization state
      }
    };
  }, []);

  useEffect(() => {
    setUpQrScanner();
  }, []);

  const setUpQrScanner = () => {
    if (document === null) return;

    const videoElem = document.querySelector('video');
    if (videoElem === null) return;

    if (isQrInitialized) return;
    setIsQrInitialized(true);

    const qrScanner = new QrScanner(
      videoElem,
      async (result) => {
        try{

          const { id, email, name, attendanceType } = JSON.parse(result.data);
          const today = new Date().toLocaleDateString();

          const q = query(
            collection(db, "attendance"),
            where("employeeId", "==", id),
            where("date", "==", today)
          );
          const snapshot = await getDocs(q);

          if (attendanceType == "check-in"){

            if (snapshot.empty) {
              // If attendance doesn't exist, add a new document
              await addDoc(collection(db, "attendance"), {
                employeeId: id,
                employeeName: name,
                email: email,
                date: today,
                timeIn: new Date().toLocaleTimeString(),
                timeOut: null,
              });
            } else {
              alert("Attendance already marked for today!");
            }



          }
          else if (attendanceType == "check-out"){

            try {
              const today = new Date().toLocaleDateString();
              const q = query(collection(db, "attendance"), where("employeeId", "==", id), where("date", "==", today));
              const snapshot = await getDocs(q);

              if (!snapshot.empty) {
                  const attendanceDoc = snapshot.docs[0];
                  const attendanceId = attendanceDoc.id;
                  const attendanceRef = doc(db, "attendance", attendanceId);

                  if(attendanceDoc.data().timeOut == null){

                    await updateDoc(attendanceRef, {
                      timeOut: new Date().toLocaleTimeString()
                  });

                  }else{
                    alert("Already Checked-Out!!")
                    router.push("/")
                  }

              } else {
              }
          } catch (error) {
              console.error("Error checking out:", error);
          }



          }
          


          qrScanner.stop();
          qrScanner.destroy();
          setIsQrInitialized(false);
          qrRef.current = null;

          router.push("/");


        }catch(e){
          console.error("Error processing QR data:",e);
        }


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


    // <div className="flex min-h-screen flex-col items-center justify-between p-4 bg-gray-900 text-white">
    //   <div className="overflow-x-auto w-3/4">
    //     <video></video>
    //     <button className="bg-gray-800 py-2 px-4 rounded mt-4" onClick={() => router.push("/")}>Back</button>
    //   </div>
    // </div>


    <div className="flex flex-col items-center justify-center p-4 bg-gray-900 text-white h-screen">
      <div className="relative w-full h-3/4">
        <video className="w-full h-full" autoPlay></video>
        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 bg-gray-800 py-2 px-4 rounded" onClick={() => router.push("/")}>Back</button>
      </div>
    </div>

  );
}