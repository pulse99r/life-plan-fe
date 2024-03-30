import React, { useState } from 'react';
import './css/grid-index.css'
import RowColumnIdx from './row-column-idx'

/*
  create a state variable for td
  tableData = []
  [tableData, setTableData] = useState([])

  function addRow = () => {
    const newRow = {id: tableData.length+1, date: "today"}
    setTableData([...tableData,newRow])
  }
  
  function 
*/
export default function GridIndex(props) {

  const [tableData, setTableData] = useState([])

  const addRow = () => {
    const newRow = {id: tableData.length+1, date: "today"}
    setTableData([...tableData,newRow])
  }
  

  const handleClick=()=>{
    
    const tBody = document.querySelector('tbody')
  
    const newRow = document.createElement('tr')
    newRow.addAttribute('class',"table-row")
    
    const td = document.createElement('td')
    td.textContent='100'
    newRow.append(td)
    tBody.append(newRow)
  console.log(tBody)
  }
  
  return (
    <div>
      <hr></hr>
      <div>
        <div>this is the TABLE area</div>
        <div className='main'>
          <div className='main__form'>
            <div className='main__input'>
              <input id='weeks' type="text" placeholder='Number of weeks'/>
              <input id='months' type="text" placeholder='Number of months'/>
              <input id='years' type="text" placeholder='Number of years'/>
            </div>
            <div className='main_buttons'>
              <button onClick={handleClick}>go</button>
              <button onClick={addRow}>add Row</button>
            </div>
          </div>
          <table>
            <tbody>
              {/* <tr className='table-row'>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr> */}
            {tableData.map((row)=>{
              return <tr key={row.id}>
                <td>{row.id}</td>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
            })
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}