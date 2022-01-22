import StudentData from '../models/student.js'; 



//Call back function  that async 
export const getStudents = async (req, res)=> {
     //this block will activate once receiving request to get a students information
    try {
        //goes to the requested student model and says find me all the students info
        //thats available based on the schema and then stores
        //that info in the allstudents variable
        const allStudents = await StudentData.find(); //await allows time to go through all data in database
        
        //200 means "ok"  / 404 is error
        res.status(200).json(allStudents); //sends back allStudents variable and information to client
    
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//this block will activate once receiving request to create a student
export const createStudent = async (req, res)=> {
    const student = req.body; //the body of the client request recieved gets stored in "student" variable

    const newStudent = new StudentData(student)  //calls on the model we created in models folder and passes student variable request

    try {
      
       await newStudent.save(); //awaits allows time to store new student into database in async time
      
       //prints response message 201 means file creates
       res.status(201).json(newStudent);
    } catch (error) {
        //409 means conflict 
        res.status(409).json({message: error.message})
    }
}


export const deleteStudent = async (req, res) =>{
    const id = req.params.id;

    try {
        await StudentData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted!')
    } catch (error) {
        console.log(error);
    }

}