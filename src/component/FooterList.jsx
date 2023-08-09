import Tabs from "./Tabs"

function FooterList({activeTab,numberItems,clearCompleted,changeActiveTab}){
    return(
        <div className="bg-veryLightGray dark:bg-veryDarkDesaturatedBlue py-3 px-3 flex justify-between">
            <p className="text-darkLightGrayishBlue1 ">{numberItems} item left</p>

            <div className="space-x-2 text-darkLightGrayishBlue1 hidden md:block">
            <Tabs activeTab={activeTab} changeActiveTab={changeActiveTab}/>
            </div>
            <button className="text-darkLightGrayishBlue1" onClick={() =>clearCompleted()}>clear completed</button>

        </div>
    )
}
export default FooterList