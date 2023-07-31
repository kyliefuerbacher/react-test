import React, { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'

export default function GooglePicker() {
    const [openPicker, data, authResponse] = useDrivePicker();  
    // const customViewsArray = [new google.picker.DocsView()]; // custom view

    const handleOpenPicker = () => {
        openPicker({
            clientId: "",
            developerKey: "",
            viewId: "SPREADSHEETS",
            showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true
        })
    }

    useEffect(() => {
        if (data) {
            data.docs.map((i) => console.log(i))
        }
    },[data])

    return (
        <div>
            <button onClick={() => handleOpenPicker}>Open Picker</button>
        </div>
    )
}