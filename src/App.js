// import React from "react"
// import { PageAction } from '@newrelic/browser-agent/features/page_action';
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
// import Home from "./components/Home"
// import Student from "./components/Student"
// import Contact from "./components/Contact"
// import Navbar from "./components/Navbar"
// import StudentProvider from "./components/Studentcontext"
// import Addstudent from "./components/Addstudent"

// import { useEffect } from 'react';


// const App =() => {
//     useEffect(() => {
//         // Initialize New Relic with your configuration
//         if (window.newrelic) {
//             const options = {
//                 info: { /* ... */ },
//                 loader_config: { /* ... */ },
//                 init: { /* ... */ },
//                 features: [
//                     PageAction
//                 ]
//             };
//             window.newrelic.init(options);
//         }
//     }, []);
//     return(
//         <StudentProvider>
//         <div className="background">
        
//         <Router>
//             <Navbar/>
//             <Routes>
//             <Route path="/" element={<Home />} />
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/student" element={<Student />} />
//                 <Route path="/Addstudent" element={<Addstudent />} />
//                  <Route path="/Addstudent/:id" element={<Addstudent/>}/> 
//                 <Route path="/contact" element={<Contact/>} />
//             </Routes>
            
//         </Router>
        
        
             
    
//         </div>
//         </StudentProvider>
//     )

// }
// export default App

// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Student from './components/Student';
// import Contact from './components/Contact';
// import Navbar from './components/Navbar';
// import StudentProvider from './components/Studentcontext';
// import Addstudent from './components/Addstudent';

// const App = () => {
//     useEffect(() => {
//         // Add a page action when the App component mounts
//         if (window.newrelic) {
//             window.newrelic.addPageAction('PageAction ', { component: 'App' });
//         }
//     }, []);

//     return (
//         <StudentProvider>
//             <div className="background">
//                 <Router>
//                     <Navbar />
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/home" element={<Home />} />
//                         <Route path="/student" element={<Student />} />
//                         <Route path="/Addstudent" element={<Addstudent />} />
//                         <Route path="/Addstudent/:id" element={<Addstudent />} />
//                         <Route path="/contact" element={<Contact />} />
//                     </Routes>
//                 </Router>
//             </div>
//         </StudentProvider>
//     );
// };

// export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Student from './components/Student';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import StudentProvider from './components/Studentcontext';
import Addstudent from './components/Addstudent';

// Component to track page views
const TrackPageView = () => {
    const location = useLocation();

    useEffect(() => {
        if (window.newrelic) {
            window.newrelic.addPageAction('PageView', { path: location.pathname });
        }
    }, [location]);

    return null;
};

const App = () => {
    return (
        <StudentProvider>
            <div className="background">
                <Router>
                    <TrackPageView />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/student" element={<Student />} />
                        <Route path="/Addstudent" element={<Addstudent />} />
                        <Route path="/Addstudent/:id" element={<Addstudent />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>
            </div>
        </StudentProvider>
    );
};

export default App;

