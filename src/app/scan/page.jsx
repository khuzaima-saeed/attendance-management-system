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
      async(result) => {
        qrScanner.stop();
        qrScanner.destroy();
        setIsQrInitialized(false);
        qrRef.current = null
        const today = new Date()
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        if (result.data === date) {
          //If for hello starts here

          if (page_query === "checkin"){
          const employeeDoc = doc(db, 'employees', user.uid);
          const employeeSnapshot = await getDoc(employeeDoc);
          let employeeName = "Unknown";
          if (employeeSnapshot) {
              const { firstName, lastName } = employeeSnapshot.data();
              employeeName = `${firstName} ${lastName}`;
          }
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