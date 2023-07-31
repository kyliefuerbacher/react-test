import React from 'react';
import Header from './Header';
import DataType from './DataType';
import SourceType from './SourceType';
import OpenFile from './OpenFile';
//import GooglePicker from './components/GooglePicker';

export default function UploadPage() {
    return(
        <>
        <Header/>
        <DataType/>
        <SourceType/>
        <OpenFile/>
        </>
    )
}