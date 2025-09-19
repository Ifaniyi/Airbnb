import Icons from "./icons"
function Rooms(){
    return(
        <div className="flex flex-row justify-between">
            <div className="flex flex-row border gap-2 p-2 rounded-full border-gray-200 mb-1 shadow-md">
                <Icons icon="/icon/bed1.svg" num="4"/>
                <Icons icon="/icon/bathtub1.png" num="2"/>
                <Icons icon="/icon/bed1.svg" num="2-4"/>
            </div>

            
        </div>
    )
}
export default Rooms