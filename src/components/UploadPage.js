import React from 'react';
import Header from './Header';
import DataSetUpload from './DataSetUpload';
import AdditionalMetadata from './AdditionalMetadata';

export default function UploadPage() {
    return(
        <>
        <Header/>
        <DataSetUpload/>
        <AdditionalMetadata/>
        </>
    )
}