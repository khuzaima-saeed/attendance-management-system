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