import React, { useContext } from 'react'
import Student from './Student'
import { studentcontext } from './Studentcontext';


const Studentlist = () => {
  
  let [students,setstudent]=useContext(studentcontext);
  console.log(students);
    
    
  return (
    

    <div className='d-flex'>
     {
       
         students.map((student,index)=>
            <Student key={index} Name={student.Name} Age={student.Age} Course={student.Course} Batch={student.Batch}/>
           
         )
       
     }
    </div>
  )
}

export default Studentlist