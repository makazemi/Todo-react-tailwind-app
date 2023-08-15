import React, { useState,useEffect } from "react"

function CreateNewItem({addItem}){
    const [newItem,setNewItem]= useState({
        text:"",
        isCompleted:false
    })

    function handleChangeText(event){
        console.log("handleChangeText",event.target.value)
        setNewItem(prevFormData => ({
                ...prevFormData,
                text: event.target.value
            
        }))
    }

    function handleChangeIsCompleted(){
        setNewItem(prevFormData => ({
               ...prevFormData,
                isCompleted: !prevFormData.isCompleted
            
        }))
    }

    function submitNewItem(event){
        event.preventDefault();
        newItem.id=Math.random()
        console.log("newItem",newItem)
        if(newItem.text!==""){
            addItem(newItem)
        }
        setNewItem({
                text: "",
                isCompleted:false
        })
    }

    return(
        <div className="bg-veryLightGray dark:bg-veryDarkDesaturatedBlue rounded-md py-2 px-4 flex items-center  mt-8">
            
            { newItem.isCompleted ? 
                    <button className="rounded-full w-5 h-5 bg-gradient-to-r from-fromGradient to-toGradient
                    flex items-center justify-center" onClick={handleChangeIsCompleted}>
                        <img src="images/icon-check.svg" className="w-2 h-2  "/>
                    </button> :
                
                    <button className=" relative group" onClick={handleChangeIsCompleted}>
                        <div className="absolute  w-5 h-5 rounded-full p-[1px] bg-gradient-to-r from-fromGradient to-toGradient opacity-0 group-hover:opacity-100">
                            <div className="bg-veryLightGray dark:bg-veryDarkDesaturatedBlue w-full h-full rounded-full"></div>
                        </div>
                        <div  className="  w-5 h-5 rounded-full border-[1px] border-darkLightGrayishBlue1 bg-veryLightGray
                            dark:bg-veryDarkDesaturatedBlue
                            "/>
                    </button>
                }
            
            <input type="text" 
            value={newItem.text}
            onChange={handleChangeText}
            className=" focus:border-transparent focus:ring-0
            placeholder-darkLightGrayishBlue1 placeholder:text-sm text-lightVeryDarkGrayishBlue
            dark:text-darkLightGrayishBlue1 bg-veryLightGray dark:bg-veryDarkDesaturatedBlue 
            border-none  hover:border-gradient-to-r  hover:border-from-fromGradient hover:border-to-toGradient min-w-0 " placeholder="Create a new todo..." />

            <button onClick={submitNewItem}>submit</button>
        </div>
    )
}

export default CreateNewItem