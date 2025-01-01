import React from 'react';

interface BluePrintProps {
  title: string;
  subtitle: string;
}

const BluePrint: React.FC<BluePrintProps> = ({ title, subtitle }) => (
  <div className="bg-blue-500 text-white p-4">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
);

export default BluePrint;
