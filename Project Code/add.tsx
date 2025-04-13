import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface Subject {
  name: string;
  lectures: number;
}

const BunkCalculator = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: 'Subject 1', lectures: 0 },
    { name: 'Subject 2', lectures: 0 },
    { name: 'Subject 3', lectures: 0 },
    { name: 'Subject 4', lectures: 0 },
    { name: 'Subject 5', lectures: 0 },
  ]);

  const [totalLectures, setTotalLectures] = useState(0);
  const [bunkedLectures, setBunkedLectures] = useState(0);

  const handleLectureChange = (index: number, value: number) => {
    const newSubjects = [...subjects];
    newSubjects[index].lectures = value;
    setSubjects(newSubjects);
  };

  const calculateBunkedLectures = () => {
    const total = subjects.reduce((acc, subject) => acc + subject.lectures, 0);
    setTotalLectures(total);
    setBunkedLectures(total * 0.2);
  };

  const data = subjects.map((subject, index) => ({
    name: subject.name,
    lectures: subject.lectures,
  }));

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Bunk Calculator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {subjects.map((subject, index) => (
          <div key={index} className="flex flex-col mb-4">
            <label className="text-lg font-medium mb-2">{subject.name}</label>
            <input
              type="number"
              value={subject.lectures}
              onChange={(e) => handleLectureChange(index, parseInt(e.target.value))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>
      <button
        onClick={calculateBunkedLectures}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Calculate Bunked Lectures
      </button>
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">Total Lectures: {totalLectures}</h2>
        <h2 className="text-2xl font-bold mb-2">Bunked Lectures: {bunkedLectures}</h2>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="lectures" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BunkCalculator;
