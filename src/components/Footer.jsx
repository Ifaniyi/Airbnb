import Alxlogo from "./ui/alxlogo";
import Company from "./ui/company";
import Explore from "./ui/explore";
import Help from "./ui/help";

function Footer(){
    return(
        <div>
            <div className="bg-green-500 h-10 w-full">

            </div>

            <div className="flex flex-row bg-black ">
                <Alxlogo />
                <Explore />
                <Company />
                <Help />
            </div>

        </div>
    )
}
export default Footer