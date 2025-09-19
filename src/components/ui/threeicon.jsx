import Icons from "./icons";


function Threeicon () {
    return (
        <div className="flex flex-row gap-4">

        <div className="flex flex-row  gap-18 p-2 mb-1 border border-gray-200 rounded-full shadow-md">
            <Icons icon="/icon/bed1.svg" num="4 Bedrooms"  />
        </div>
        <div className="flex flex-row  gap-18 p-2 mb-1 border border-gray-200 rounded-full shadow-md">
            <Icons icon="/icon/bathtub1.png" num="2 Bathrooms"/>
            
        </div>
        <div className="flex flex-row  gap-18 p-2 mb-1 border border-gray-200 rounded-full shadow-md">
            <Icons icon="/icon/bed1.svg" num="2-4 guests"/>
        </div>
        </div>
    )
}
export default Threeicon;