import Button from "./ui/button";
import Icons from "./ui/icons";

function Allbutton(){
    return(
        <div className="flex flex-row justify-between">
            <div className="flex gap-3 p-4 m-4 flex-row">
                <Button button={"All"} className="bg-green-200 p-2 rounded-full border border-green-500 text-center" />
                <Button button={"Top Villa"} className="rounded-full text-center border border-gray-200 shadow p-2" />
                <Button button={"Free Reschedule"} className="rounded-full text-center border border-gray-200 shadow p-2" />
                <Button button={"Book Now,Pay later"} className="rounded-full text-center border border-gray-200 shadow p-2" />
                <Button button={"Self Checkin"} className="rounded-full text-center border border-gray-200 shadow p-2" />
                <Button button={"Instant Book"} className="rounded-full text-center border border-gray-200 shadow p-2" />
            </div>

            <div className="flex flex-row gap-4 p-4 m-4 rounded-lg">
                <Button button={"Filter"}  />
                <Icons icon="/icon/Filter.svg" />
                <p className="text-gray-500">sort by:<span className="text-black flex-row flex">Highest price</span></p>
                
            </div>

        </div>
    )
}
export default Allbutton