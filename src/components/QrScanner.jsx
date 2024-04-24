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








// "use client";
// import { useEffect, useRef } from 'react';
// import QrScanner from 'qr-scanner';

// const WebcamScanner = ({ onScanned, active }) => {
//     const videoRef = useRef(null);
//     const scannerRef = useRef(null);

//     useEffect(() => {
//         if (active) {
//             scannerRef.current = new QrScanner(videoRef.current, result => {
//                 if (result && onScanned) {
//                     onScanned(result.data);
//                 }
//             },undefined, undefined, true);
//             scannerRef.current.start();
//         } else {
//             if (scannerRef.current) {
//                 scannerRef.current.destroy();
//             }
//         }

//         return () => {
//             if (scannerRef.current) {
//                 scannerRef.current.destroy();
//             }
//         };
//     }, [active, onScanned]);

//     return <video ref={videoRef} autoPlay playsInline style={{ width: "50%", height: "50%" }}></video>;
// };

// export default WebcamScanner;








"use client";
import React, { useEffect, useRef } from 'react';
import QrScanner from 'qr-scanner';

const WebcamScanner = ({ onScanned }) => {
    const videoRef = useRef(null);
    const scannerRef = useRef(null);

    useEffect(() => {
        const initializeScanner = async () => {
            try {
                const scanner = new QrScanner(videoRef.current, result => {
                    if (result && onScanned) {
                        onScanned(result.data);
                    }
                });
                await scanner.start();
                scannerRef.current = scanner;
            } catch (error) {
                console.error('Failed to initialize QR scanner:', error);
            }
        };

        initializeScanner();

        return () => {
            if (scannerRef.current) {
                scannerRef.current.destroy();
            }
        };
    }, [onScanned]);

    return <video ref={videoRef} autoPlay playsInline style={{ width: "50%", height: "50%" }}></video>;
};

export default WebcamScanner;