import React, { useContext,useState,useEffect } from 'react'
import { useNavigate ,useParams,} from 'react-router-dom';
 import {studentcontext} from "./Studentcontext"
import { Link } from 'react-router-dom';


 const Addstudent = () => {
  let navigate=useNavigate();
  const [students,setstudents]=useContext(studentcontext)
  let  {id}=useParams();

 let [studentsAdd ,setStudentsAdd]=useState({
        id:"",
        Name:"",
        Age:"",
        Course:"",
        Batch:"",
  })

  useEffect(() => {
  students.forEach((studentsAdd) => {
      if (studentsAdd.id === id) {
          setStudentsAdd({
              Name: studentsAdd.Name,
              Age: studentsAdd.Age,
              Course: studentsAdd.Course,
              Batch: studentsAdd.Batch,
          });
      }
  });
}, [id, students]);

const handleChange = (event) => {
  setStudentsAdd({ ...studentsAdd, [event.target.name]: event.target.value });
};
const handleAddStudent=(event)=>{
   
    event.preventDefault()
    if(studentsAdd.Name===" "){
      alert("Name is required")
    } else{
      if (id===undefined) {
        let newDetails={...studentsAdd ,id: new Date().getTime().toString()};
        console.log(newDetails);
        setstudents([...students , newDetails]);
      }
      else {
        setstudents((pre)=>
       
        pre.map((student)=>
      
        student.id===id ?
         {
          id:id ,
          Name:studentsAdd.Name,
          Age:studentsAdd.Age,
          Course:studentsAdd.Course,
          Batch:studentsAdd.Batch,

        } : student
        ) 
      );

      }
    }
    
     navigate("/student")
  };
return (
     
    <div className='form-cont'>
    <form onSubmit={handleAddStudent}>
    <div className="detail1">
    <label for="name" className="form-label">Name</label>
    <input type="text" id="name" className="input-style form-control1" name="Name" value={studentsAdd.Name} onChange={handleChange} />
    
    </div>
    <div className="detail2">
    <label for="age" className="form-label">Age</label>
    <input type="number" id="age" className="input-style form-control2" name="Age" value={studentsAdd.Age} onChange={handleChange}/>
    </div>
    <div className="detail3">
    <label className="form-check-label" for="course">Course</label>
    <input type="text" id="course" className="input-style form-control3" name="Course" value={studentsAdd.Course} onChange={handleChange}/>
    
    </div>
    <div className="detail4">
    <label for="batch" className="form-label">Batch</label>
    <input type="text" id="batch" className="input-style form-control4" name="Batch" value={studentsAdd.Batch} onChange={handleChange}/>
    </div>
    <div className='Form-btns'>
    <button type="submit" className="btn1 btn-1" >Submit</button>
    <Link to="/Student"><button type="submit" className="btn1 btn-2" >Cancel</button></Link>
    </div>
    </form>
    </div>
    
   
   )
 }

export default Addstudent