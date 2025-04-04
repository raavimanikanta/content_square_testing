
import React, { createContext, useState } from "react"

export const studentcontext=createContext()

const StudentProvider= (props) => {
    let [students , setStudents] = useState( [
        
            {id:'1',Name:'Manikanta',Age: "23",  Course:"MERN" , Batch:"OCTOBER",},
            {id:"2", Name:"Prasad",   Age:24,   Course:"MEAN", Batch:"OCTOBER",},
            {id:"3", Name:"John",     Age:22,   Course:"MERN" , Batch:"OCTOBER" ,},
           
    ]);
  

return (
    <studentcontext.Provider value={[students,setStudents]}>
       {props.children}
    </studentcontext.Provider>
)
}
export default StudentProvider