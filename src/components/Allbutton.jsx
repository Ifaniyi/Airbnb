import Button from "./ui/button";
import Icons from "./ui/icons";

function Allbutton(){
    return(
        <div>
            <div className="flex gap-4 p-4 m-4">
                <Button button={"All"} />
                <Button button={"Top Villa"} />
                <Button button={"Free Reschedule"} />
                <Button button={"Book Now,Pay later"} />
                <Button button={"Self Checkin"} />
                <Button button={"Instant Book"} />
            </div>

            <div>
                <Button button={"Filter"}  />
                <Icons icon={"/icon/Filterimg.png"} />
                
            </div>

        </div>
    )
}
export default Allbutton