import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from '@/app/firebase';
import Link from "next/link";

const calculateDuration = (startTimeStr, endTimeStr) => {
  if (!startTimeStr || !endTimeStr) return '';

  const startTime = parseTimeString(startTimeStr);
  const endTime = parseTimeString(endTimeStr);

  const durationMilliseconds = endTime - startTime;
  const hours = Math.floor(durationMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((durationMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((durationMilliseconds % (1000 * 60)) / 1000);

  return `${hours} hours ${minutes} minutes ${seconds} seconds`;
};

const parseTimeString = (timeStr) => {
  const [hours, minutes, seconds] = timeStr.split(':').map(part => parseInt(part));
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);
  return date;
};

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const AdminPage = () => {
  const [attendances, setAttendances] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, 'attendance'),
        where('date', '==', formatDate(selectedDate))
      ),
      snapshot => {
        const updatedAttendances = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAttendances(updatedAttendances);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  return (

<div className="min-h-screen bg-slate-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Admin Page</h1>
        <div className="mb-4">
          <label htmlFor="datePicker" className="block text-gray-400 font-bold mb-2">Select Date:</label>
          <input 
            type="date" 
            id="datePicker" 
            value={selectedDate.toISOString().slice(0, 10)} 
            onChange={handleDateChange} 
            className="appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-100 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : attendances.length === 0 ? (
          <p>No Attendances Marked for {formatDate(selectedDate)}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 bg-gray-800 hidden sm:table-cell">Name</th>
                  <th className="px-4 py-2 bg-gray-800 hidden sm:table-cell">Date</th>
                  <th className="px-4 py-2 bg-gray-800 hidden sm:table-cell">Time In</th>
                  <th className="px-4 py-2 bg-gray-800 hidden sm:table-cell">Time Out</th>
                  <th className="px-4 py-2 bg-gray-800 hidden sm:table-cell">Duration</th>
                </tr>
              </thead>
              <tbody>
                {attendances.map(attendance => (
                  <tr key={attendance.id}>
                    <td className="border px-4 py-2 hidden sm:table-cell">{attendance.employeeName}</td>
                    <td className="border px-4 py-2 hidden sm:table-cell">{attendance.date}</td>
                    <td className="border px-4 py-2 hidden sm:table-cell">{attendance.timeIn}</td>
                    <td className="border px-4 py-2 hidden sm:table-cell">{attendance.timeOut ? attendance.timeOut : 'Not checked out'}</td>
                    <td className="border px-4 py-2 hidden sm:table-cell">{attendance.timeOut ? calculateDuration(attendance.timeIn, attendance.timeOut) : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Responsive table for mobile */}
            <div className="sm:hidden">
              {attendances.map(attendance => (
                <div key={attendance.id} className="border border-gray-800 p-4 mb-4">
                  <div className="font-bold">Name: {attendance.employeeName}</div>
                  <div>Date: {attendance.date}</div>
                  <div>Time In: {attendance.timeIn}</div>
                  <div>Time Out: {attendance.timeOut ? attendance.timeOut : 'Not checked out'}</div>
                  <div>Duration: {attendance.timeOut ? calculateDuration(attendance.timeIn, attendance.timeOut) : '-'}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-4 flex justify-center">
          <Link href="/">
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>




  );
};

export default AdminPage;