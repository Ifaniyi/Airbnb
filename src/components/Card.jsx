import Button from "./ui/button";
import Rooms from "./ui/rooms";
import Villabeach from "./Villabeach";

function Card(props){
    return(
        <div className="flex flex-col gap-4 p-4 m-4 border border-gray-200 rounded-lg shadow-md">
            <img src={props.image} alt="card" className="w-74 h-auto rounded-lg" />
            <div className="flex flex-row items-center w-full">
                <Button button={"Top Villa"} />
                <Button button={"Self Checkin"} />
                <Button button={"Free Reschedule"} />
            </div>
            <div className="flex">
                <Villabeach />
            </div>

            <div>
                <Rooms />
            </div>
            
        </div>
    )
}
export default Card