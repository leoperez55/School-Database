import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function CreateStudent() {
  
  //creating a use state //updates data
  const [student, setStudent] = useState({

    regNo: 0,
    studentName: '',
    grade: '',
    section: ''
  });

  //sends data from front end to back end    //The /students is an entity from the backend
  // the 'post' publishes the data and sends it
  const createStudent = () => {
    axios.post('http://localhost:5000/students', student).then( () =>{
      window.location.reload(false);  // The .then portion makes it so when information is created no need to refresh webpage to view new list
    })
  }

  return (
    <>
    <h2>Create Student </h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >                                                                             
      <TextField id="outlined-basic" label="Registration No." variant="outlined" value = {student.regNo} onChange={(event) =>{
        setStudent({...student, regNo: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Name" variant="outlined" value = {student.studentName} onChange={(event) =>{
        setStudent({...student, studentName: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Grade" variant="outlined" value = {student.grade} onChange={(event) =>{
        setStudent({...student, grade: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Section" variant="outlined" value = {student.section} onChange={(event) =>{
        setStudent({...student, section: event.target.value})
      }} />
      
      
      <Button variant="contained" onClick={createStudent}>Create
      </Button>
    
    
    </Box>
    </>
  );
}

