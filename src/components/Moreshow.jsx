import Button from "./ui/button";

function Moreshow(){
    return(
        <div className="justify-center items-center p-4 m-4">
            <Button button={"Show More"} className="bg-black font-semibold justify-center items-center text-white"/>
            <p>Click to see more listings</p>
        </div>
    )
}
export default Moreshow