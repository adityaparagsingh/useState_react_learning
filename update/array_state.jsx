import { useState } from "react";

function Array(){
    const [foods,setFoods] = useState(["Apple","Mango","Litchi","Banana"]);

    function handleAddFood(){
        const newFoodItem = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f=>([...f,newFoodItem]));
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=>i!==index));   //using _ as a parameter will ignore or skip the parameter 
    }
    return(
        <>
           <h2>List of Food Items</h2> 
           <ul>
                {foods.map((food,index)=>
                <li 
                    key={index} onClick={()=>handleRemoveFood(index)}>
                        {food}
                </li>)}

           </ul>
           <input type="text" id="foodInput" placeholder="Enter Food Item Name"/>
           {/* <br /> */}
           <button onClick={handleAddFood}>Add</button>
           {/* <button onClick={handleRemoveFood}>Remove</button> */}
        </>
    );
}

export default Array;