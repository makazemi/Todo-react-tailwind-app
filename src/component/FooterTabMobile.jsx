import Tabs from "./Tabs"

function FooterTabMobile({activeTab,changeActiveTab}){
    return(
        <div className="bg-veryLightGray dark:bg-veryDarkDesaturatedBlue  space-x-4 text-darkLightGrayishBlue1 
        md:hidden rounded-md p-3 flex justify-center mt-4 mb-12">
               <Tabs activeTab={activeTab} changeActiveTab={changeActiveTab}/>

        </div>
    )
}

export default FooterTabMobile