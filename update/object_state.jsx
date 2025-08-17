// updater function : a function passed as an argument to setState() usually
//                    eg, setCount(c=>c+1)   the arrow function is the updater function
//                                           c denotes the previous state of count variable
// using updater function handles and perform  safe updates in useState

import { useState } from "react";
//updating state of an object using react
function Object(){

    const [car, setCar] = useState({year: 2020 ,
                                    company: "mercedes" ,
                                    model: "W11", });  //creating a javascript object using { }

    function handleYearChange(event){
        // setCar(event.target.value);
        setCar(c=>({...c,year:event.target.value}))    //(...car) ... is a spread operator
                                                           // using an updater arrow function (c)
                                                           //c represents previous state of car
 
    }
    function handleCompanyChange(event){
        setCar(c=>({...c,company:event.target.value}));
    }
    
    function handleModelChange(event){
        // setCar(event.target.value);
        setCar(c=>({...c,model:event.target.value}));
    }

    return(
        <>
            <p>Your favourite Car is  {car.year} {car.company} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br />
            <input type="text" value={car.company} onChange={handleCompanyChange}/><br />
            <input type="text" value={car.model} onChange={handleModelChange}/><br />
        </>
    );
};

export default Object;