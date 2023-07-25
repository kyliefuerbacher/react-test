import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DataType from './components/DataType';
import SourceType from './components/SourceType';
import OpenFile from './components/OpenFile';
  
export default function App() {
  
  return (
    <>
    <DataType/>
    <SourceType/>
    <OpenFile/>
    </>
  );
}