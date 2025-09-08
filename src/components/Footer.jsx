import Whitealx from "./ui/whitealx";
import Explore from "./ui/explore";
import Company from "./ui/company";
import Help from "./ui/help";
import Downpart from "./ui/downpart";

function Footer(){
    return(
        <div>
            <div className="bg-green-500 h-10 w-full">
            </div>
            <div className="flex flex-row bg-black justify-around p-6 gap-6">
                <Whitealx />
                <Explore />
                <Company />
                <Help />
            </div>
            <div>
                <Downpart />
            </div>

             

        </div>
    )
}
export default Footer