import React, { useContext } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { studentcontext } from './Studentcontext';
   const Student = () => {
    let [students]=useContext(studentcontext)
    console.log(students)

  let navigate=useNavigate();

  const onclicksubmit=()=>{
    console.log("hiii");
    navigate("/Addstudent")
   }
   return (
   <div>
   <div>
      <div className='cont-student'>
        <h1>Student-details</h1>
        {/* <input type="text" className='input-details' placeholder='Add New Student' /> */}
        <Link to="/Addstudent"><button className='mem-btns' onClick={ onclicksubmit}>Add New Member</button> </Link>
        </div>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        
        <TableHead className='header'>
          <TableRow className='rows'>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right" className='colr'>Change</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {students.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.Course}</TableCell>
              <TableCell align="right">{row.Batch}</TableCell>
              <TableCell align="right"><Link to={`/Addstudent/${row.id}`}><button className='edit-btn' > <i class="fa-solid fa-user-pen"></i> EDIT </button></Link></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> </div> 



    
    
    
      </div> 
    
        
  )
 }

 export default Student