import Button from "./ui/button";

function Moreshow(){
    return(
        <div className="mt-12">
            <div className="px-6">
                <Button button={"Show More"} className="bg-black font-semibold justify-center items-center text-white p-2 rounded-full px-6 py-4 mb-2"/>
            </div>
            <div className="mb-8">
                <p className="text-black font-semibold">Click to see more listings</p>
            </div>
        </div>
    )
}
export default Moreshow