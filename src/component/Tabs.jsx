function Tabs({activeTab,changeActiveTab}){
    return(
        <>
               <button className={activeTab==="All" ? "text-brightBlue":undefined}
                  onClick={() =>changeActiveTab("All")}>All</button>
                  <button className={activeTab==="Active" ? "text-brightBlue":undefined}
                  onClick={() =>changeActiveTab("Active")} >Active</button>
                  <button className={activeTab==="Completed" ? "text-brightBlue":undefined}
                  onClick={() =>changeActiveTab("Completed")}>Completed</button>
        </>
    )
}

export default Tabs