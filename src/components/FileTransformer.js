import React, { useState } from 'react';

const FileTransformer = () => {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  function getTargetHeaders() {
    // Define the default mapping rules and extract the target headers
    const defaultMappingRules = {
      'Epoch_PK_Study': 'PK Study',
      'Dosing_Group': 'Dosing Group',
      'Investigator_2': 'Secondary Investigator',
      'Bioanalyst_1': 'Primary Bioanalyst',
      'Bioanalyst_2': 'Secondary Bioanalyst',
      'Pharmaceutics_Rep': 'Primary Pharmaceutical Representative',
      'Pharmaceutics_Rep_2': 'Secondary Pharmaceutical Representative',
      'Compound_Received_DateTime': 'Compound Received Timestamp',
      'Creation_Date': 'Study Creation Date',
      'Modified_Date': 'Study Modification Date',
      'Submitter': 'Study Submitted By',
      'Requestor': 'Study Requestor',
      'Assay_Type': 'Assay Type'
    };
    return defaultMappingRules;
  }

  function transformHeaders(sourceHeaders, mappingRules) {
    // Transform the source headers based on the mapping rules
    const transformedHeaders = sourceHeaders.map(header => {
      return mappingRules[header] || header;
    });
    return transformedHeaders;
  }

  function onFileChange(e) {
    setFile(e.target.files[0]);
  }

  function onTransformButtonClick() {
    if (!file) {
      setMessage('No file selected.');
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      const content = e.target.result;
      const [headers, ...rows] = parseCSV(content);

      if (!headers || !rows || headers.length === 0) {
        setMessage('Error: Unsupported file format. Please select a CSV or Excel file.');
        return;
      }

      const mappingRules = getTargetHeaders();
      const transformedHeaders = transformHeaders(headers, mappingRules);

      // Convert transformed headers and rows back to CSV format
      let transformedCSV = [transformedHeaders.join(',')].concat(rows.map(row => row.join(','))).join('\n');

      // Download the transformed data as a CSV file
      downloadCSV(transformedCSV, 'transformed_data.csv');

      setMessage('Header transformation completed successfully.');
    };

    // Read the file content
    if (file.name.endsWith('.csv') || file.name.endsWith('.xls') || file.name.endsWith('.xlsx')) {
      fileReader.readAsText(file);
    } else {
      setMessage('Error: Unsupported file format. Please select a CSV or Excel file.');
    }
  }

  function parseCSV(csvContent) {
    // Parse CSV content and return the data as an array of arrays
    const rows = csvContent.trim().split('\n');
    if (rows.length < 2) {
      return null;
    }

    const headers = rows[0].split(',');
    const data = [];
    for (let i = 1; i < rows.length; i++) {
      data.push(rows[i].split(','));
    }

    return [headers, ...data];
  }

  function downloadCSV(csvContent, fileName) {
    // Download the CSV content as a file
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a);

    // Trigger the click event on the anchor element
    a.click();

    // Clean up
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  return (
    <div style={{ margin: 30}}>
      <input type="file" onChange={onFileChange} />
      <button onClick={onTransformButtonClick}>Transform</button>
      <p>{message}</p>
    </div>
  );
};

export default FileTransformer;
