import { useState } from "react";



function Object_array(){

    const [student,setStudent] = useState([])
    const [stuName,setStuName] = useState("")
    const [stuAge,setStuAge] = useState("")
    const [stuBranch,setStuBranch] = useState("")

    function handleAddStudent(){
        const studentDetails = {name : stuName,
                                age : stuAge,
                                branch : stuBranch};
        setStudent(s=>[...s,studentDetails]);

        setStuName("");
        setStuAge("");
        setStuBranch("");
    }
    function handleRemoveStudent(index){
        setStudent(s=>s.filter((_,i) => i!== index));
    }
    function handleNameChange(event){
        setStuName(event.target.value);

    }
    function handleAgeChange(event){
        setStuAge(event.target.value);
    }
    function handleBranchChange(event){
        setStuBranch(event.target.value);

    }

    return(
        <div>
            <h2>Colez Student List</h2>
            <input type="text" value={stuName} placeholder="Enter Name" onChange={handleNameChange}/>
            <br />
            <input type="number" value={stuAge} placeholder="Enter Age" onChange={handleAgeChange}/>
            <br />
            {/* <input type="" placeholder="Select Branch" /> */}
            {/* <label ></label> */}
            <select value={stuBranch} onChange={handleBranchChange}>
                <option value="Select">Select your Branch</option>
                <option value="CSE">Computer Science Engg</option>
                <option value="CE">Computer Engg</option>
                <option value="IT">Information Technology</option>
                <option value="ECE">Electrical and Computer Engg</option>
                <option value="ENTC">Electrical and TeleCommunication</option>
                <option value="BioTech">Bio Tech Engg</option>
                <option value="Mech">Mechanical Engg</option>
                <option value="Civil">Civil Engg</option>
                <option value="Chem">Chemical Engg</option>
            </select>
            <br />
            <button onClick={handleAddStudent}>Add Student</button>
            <ol>
                {student.map((stu,index)=>
                    <li key={index} onClick={()=>handleRemoveStudent(index)}>
                        {stu.name} - {stu.age} - {stu.branch}
                    </li>
                )}
            </ol>


        </div>
    );
}

export default Object_array;