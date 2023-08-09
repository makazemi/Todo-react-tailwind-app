function TodoItem({item,deleteItem,changeActiveState}){

    function toggleIsCompleted(){
        item.isCompleted=!item.isCompleted
        changeActiveState(item)
    }
    return(
        <div className="bg-veryLightGray dark:bg-veryDarkDesaturatedBlue py-2 px-3 -mx-1 border-b-2 border-darkDarkGrayishBlue flex items-center justify-between  ">
            <div className="flex  items-center  ">

                { item.isCompleted ? 
                    <button className="rounded-full w-5 h-5 bg-gradient-to-r from-fromGradient to-toGradient
                    flex items-center justify-center" onClick={toggleIsCompleted}>
                        <img src="images/icon-check.svg" className="w-2 h-2  "/>
                    </button> :
                
                    <button className=" relative group" onClick={toggleIsCompleted}>
                        <div className="absolute  w-5 h-5 rounded-full p-[1px] bg-gradient-to-r from-fromGradient to-toGradient opacity-0 group-hover:opacity-100">
                            <div className="bg-veryLightGray dark:bg-veryDarkDesaturatedBlue w-full h-full rounded-full"></div>
                        </div>
                        <div  className="  w-5 h-5 rounded-full border-[1px] border-darkLightGrayishBlue1 bg-veryLightGray
                            dark:bg-veryDarkDesaturatedBlue
                            "/>
                    </button>
                }
                
                <p className={`ml-2 text-sm text-lightVeryDarkGrayishBlue dark:text-darkLightGrayishBlue1  ${item.isCompleted ? "line-through font-light opacity-40" :undefined}`}>{item.text}</p>

            </div>

            {!item.isCompleted && <button onClick={() => deleteItem(item)}><img className="w-4 h-4" src="images/icon-cross.svg"/></button>}

        </div>
    )
}
export default TodoItem