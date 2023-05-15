import React from 'react'
import * as FileSaver from 'file-saver'
import * as XLSX from 'xlsx'
import { Button } from '@mui/material';
const Excel = ({name,freq}) => {
    const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const words = name.map((Words, i) => ({ Words, Frequency: freq[i] }));
  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Button variant='contained'size='large'style={{
      backgroundColor:'#FFFFFF', color:'#5B07E3',width: '275.29px',marginLeft:'30px',alignText:'center'}} onClick={(e) => {exportToCSV(words, "words")}}>Export</Button>
  );
}

export default Excel