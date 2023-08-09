import HeaderImage from "./HeaderImage"
import Header from "./Header"
import CreateNewItem from "./CreateNewItem"
import FooterTabMobile from "./FooterTabMobile"
import TodoItem from "./TodoItem"
import FooterList from "./FooterList"
import {useEffect, useState} from "react"

function Container(){
    const [items,setItems]= useState([])
    const [activeTab,setActiveTab] = useState("All")
    const [filteredItems,setFilteredItems] = useState(items)

    useEffect( () =>{
        getItemsfromLocalStorage()
    },[])

    useEffect( () =>{
        if(activeTab==="Completed"){
            setFilteredItems(items.filter((next) => next.isCompleted))
        }else if(activeTab==="Active"){
            setFilteredItems(items.filter((next) => !next.isCompleted))
        }else{
            setFilteredItems(items)
        }
    },[activeTab,items])

    
    

    const numberItems= items.filter((next) => !next.isCompleted).length

    function getItemsfromLocalStorage(){
        const list=JSON.parse(localStorage.getItem('todo-list'))
        if(list)
            setItems(list)
    }

    function addItem(item){
        const newList=[item,...items]
        setItems(newList)
        localStorage.setItem('todo-list', JSON.stringify(newList));
    }

    function deleteItem(item){
        const newList=items.filter((next) => next.id !== item.id)
        setItems(newList)
        localStorage.setItem('todo-list', JSON.stringify(newList));
    }

    function changeActiveState(item){ 
        const newList=items.map( (next) => (next.id===item ? item : next))
        setItems(newList)
        localStorage.setItem('todo-list', JSON.stringify(newList));
    }

   function clearCompleted(){
    const newList=items.filter((next) => !next.isCompleted)
    setItems(newList)
    localStorage.setItem('todo-list', JSON.stringify(newList));

    }

    function changeActiveTab(tab){
        setActiveTab(tab)
    }

    return (
        <div >
            <div className="relative  ">
                <HeaderImage/>

                <div className="absolute right-0 left-0 mx-auto px-8 top-12 md:max-w-xl">
                    <Header/>
                    <CreateNewItem addItem={addItem}/>

                    {items.length>0 && <div className="bg-veryLightGray p-1 dark:bg-veryDarkDesaturatedBlue rounded-md mt-4">
                        {filteredItems.map( (next)=> <TodoItem item={next} deleteItem={deleteItem} 
                            changeActiveState={changeActiveState} key={next.id} />  )}

                    <FooterList activeTab={activeTab} numberItems={numberItems} 
                        clearCompleted={clearCompleted}
                        changeActiveTab={changeActiveTab} />
                    </div>}

                    { items.length>0 && <FooterTabMobile activeTab={activeTab} changeActiveTab={changeActiveTab} />}
                    { items.length>0 && <p className="text-darkLightGrayishBlue1 text-center my-12">Drag and drop to reorder list</p> }       
                </div>

            </div>

            <div className="bg-veryLightGray dark:bg-veryDarkBlue h-screen">
            </div>

        </div>
    )
}

export default Container