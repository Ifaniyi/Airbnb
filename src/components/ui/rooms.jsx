import Icons from "./icons"
function Rooms(){
    return(
        <div className="flex justify-between ">
            <div className="flex flex-row border gap-3 p-2">
                <Icons icon="/icon/bed1.svg" num="4"/>
                <Icons icon="/icon/bathtub1.png" num="2"/>
                <Icons icon="/icon/bed1.svg" num="2-4"/>
            </div>

            <div className="">
                <p>$2,350</p>
            </div>
        </div>
    )
}
export default Rooms