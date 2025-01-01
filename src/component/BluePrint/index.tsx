import React from 'react';

interface BluePrintProps {
  title: string;
  subtitle: string;
}
/*
 * BluePrint component is a blue print for a React web app. It is a simple component
 * that you can copy/paste to create new components by keeping the same structure.
 * rename / update the component and the story file as needed.
 */
const BluePrint: React.FC<BluePrintProps> = ({ title, subtitle }) => (
  <div className="bg-blue-500 text-white p-4">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
);

export default BluePrint;
