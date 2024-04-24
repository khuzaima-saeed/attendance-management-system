import { updateDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

const Scan = () => {
    const [scanning, setScanning] = useState(false);
    // const router = useRouter();

    useEffect(() => {
        // Start scanning when component mounts
        setScanning(true);
        return () => {
            // Cleanup function to stop scanning when component unmounts
            setScanning(false);
        };
    }, []);

    const handleScan = async (data) => {
        if (!scanning) return;

        console.log("Scanned data:", data);

        // Handle check-out process
        if (data === "Test QR") {
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
    };

    return (
        <div>
            <WebcamScanner onScanned={handleScan} />
            <p>Scan the QR code to check out.</p>
        </div>
    );
};

export default Scan;