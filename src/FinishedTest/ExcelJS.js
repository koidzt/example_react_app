import './App.css';
import { saveAs } from 'file-saver';
import ExcelJS from 'exceljs';

async function exTest() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('My Sheet');

  worksheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 32 },
    { header: 'D.O.B.', key: 'dob', width: 10, outlineLevel: 1 },
  ];

  worksheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) });
  worksheet.addRow({ id: 2, name: 'Jane Doe', dob: new Date(1965, 1, 7) });

  worksheet.addRow([3, 'Sam', new Date()]);

  // await workbook.xlsx.writeFile(filename);

  //writeFile ไม่รองรับทำให้ต้องเขียนเป็น writeBuffer แทนแล้ว saveAs ด้วย file-saver
  const buffer = await workbook.xlsx.writeBuffer();

  //SaveAs ด้วย file-saver ต้อง npm i file-saver และ import {saveAs}
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  const fileExtension = '.xlsx';
  const blob = new Blob([buffer], { type: fileType });
  saveAs(blob, 'testExcelJS' + fileExtension);

  console.log('File is written');
}

function ExcelJS() {
  return (
    <div className="ExcelJS">
      <div className="container mt-4">
        <button className="btn btn-primary" onClick={exTest}>
          Create Excel
        </button>
      </div>
    </div>
  );
}

export default ExcelJS;
