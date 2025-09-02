import Button from "./ui/button";
import Icons from "./ui/icons";

function Allbutton(){
    return(
        <div className="flex flex-row justify-between">
            <div className="flex gap-4 p-4 m-4 flex-row">
                <Button button={"All"} className="bg-green-200 font-semibold px-4 rounded-full text-center" />
                <Button button={"Top Villa"} className="rounded-full text-center border border-gray-200 shadow" />
                <Button button={"Free Reschedule"} />
                <Button button={"Book Now,Pay later"} />
                <Button button={"Self Checkin"} />
                <Button button={"Instant Book"} />
            </div>

            <div className="flex flex-row gap-4 p-4 m-4 rounded-lg">
                <Button button={"Filter"}  />
                <Icons icon="/icon/Filter.svg" />
                <p className="text-gray-500">sort by:<span className="text-black">Highest price</span></p>
                
            </div>

        </div>
    )
}
export default Allbutton