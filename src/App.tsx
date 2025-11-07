import {Routes,Route} from "react-router-dom";

import Login from "./pages/Login";
import Studentgrades from "./pages/student-subject";
import StudentsSubjectGrades from "./pages/students-subject-grades";
import TeacherSubject from "./pages/teacher-subject";
import TeacherSubjectInfo from "./pages/teacher-subjectInfo";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />      
     <Route path="/student-subject" element={<Studentgrades />} />
     <Route path="/teacher-subject" element={<TeacherSubject />} />
      <Route path="/students-subject-grades" element={<StudentsSubjectGrades />} />
      <Route path="Teacher-subjectInfo" element={<TeacherSubjectInfo/>}/>
    </Routes>
  );
}