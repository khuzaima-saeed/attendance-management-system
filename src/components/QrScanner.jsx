// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';

// const QrScanner = ({ onResult, stopDecoding }) => {

//     console.log("stop decoding: ",stopDecoding)


//     const videoRef = useRef(null);
//     const readerRef = useRef(new BrowserMultiFormatReader());

//     const onDecode = useCallback((result, error) => {
//         if (result) {
//             onResult(result.getText());
//         }
//         if (error) {
//             if (error instanceof NotFoundException) {
//                 console.log('QR code not found');
//             } else {
//                 console.error('An error occurred while decoding QR code:', error);
//             }
//         }
//     }, [onResult]);

//     useEffect(() => {
//         const startScanner = async () => {
//             const reader = readerRef.current;
//             if (!reader || !videoRef.current) return;

//             try {
//                 await reader.decodeFromVideoDevice(undefined, videoRef.current, onDecode);
//             } catch (error) {
//                 console.error('Failed to start QR scanner:', error);
//             }
//         };

//         const stopScanner = () => {
//             console.log("stopping scanner: ")
//             const stream = videoRef.current.srcObject;
//             if (stream) {
//                 stream.getTracks().forEach(track => track.stop());
//             }
//             readerRef.current.stopAsyncDecode();
//         };

//         if (stopDecoding) {
//             stopScanner();
//         } else {
//             startScanner();
//         }

//         return () => {
//             // stopScanner();
//         };
//     }, [onDecode, stopDecoding]);

//     return <video ref={videoRef} playsInline />;
// };

// export default QrScanner;








"use client";
import { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';
import { useRouter, usePathname } from 'next/navigation';


const WebcamScanner = ({ onScanned }) => {
  const videoRef = useRef(null);
  const [scanned, setScanned] = useState(false);

//   const router = useRouter();

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const qrScanner = new QrScanner(
      videoElement,
      result => {
        if (!scanned) { // Check if a QR code has already been scanned
            console.log('Decoded QR code:', result.data);
            setScanned(true);
            // router.push('/');
            if (onScanned){
                onScanned(result.data);
            }
        }
        
      },
      {
        // Your options here
      }
    );

    qrScanner.start();

    return () => {
      qrScanner.stop();
      qrScanner.destroy();
    };
  }, [scanned]);

  return (
    <video ref={videoRef} autoPlay playsInline style={{ width: "40%", height: "40%" }}></video>
  );
};

export default WebcamScanner;