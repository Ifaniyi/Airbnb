import Logo from "./ui/logo" 
import Search from "./ui/search";
import Button from "./ui/button";
import IconComponent from "./ui/iconComponent";
import Checkout from "./ui/checkin";
import Checkin from "./ui/checkin";
import People from "./ui/people";
import SearchBar from "./ui/searchbar";

function Navbar(){
    return (
      <div className="w-full h-auto flex flex-col">

        <div className="flex gap-4 bg-green-400 p-4 h-auto w-full">
          <img src="/icon/Case.png" alt="airplane" className="w-8 h-8"/>
          <p>Overseas trip? Get the latest information on travel guides</p>
          <Button button={"More info"} />
        </div>

        <div className="flex flex-row gap-4 p-4">
          <Logo />
          <Search />
          <Checkin />
          <Checkout />
          <People />
          <SearchBar />

          <div>
            <Button button={"Sign in"} />
            <Button button={"Sign up"} />
          </div>

        </div>

          <div className="flex flex-row gap-8 overflow-x-scroll p-4">
            <IconComponent text={"Rooms"} icon="/icon/livingroom.png" />
            <IconComponent text={"Mansion"} icon="/icon/mansion.png" />
            <IconComponent text={"Countryside"} icon="/icon/farm1.png" />
            <IconComponent text={"Villa"} icon="/icon/villa1.png" />
            <IconComponent text={"Tropical"} icon="/icon/palmtree1.png" />
            <IconComponent text={"New"} icon="/icon/keychain1.png" />
            <IconComponent text={"Amazing pool"} icon="/icon/swimmingpool1.png" />
            <IconComponent text={"Beach house"} icon="/icon/vacations1.png" />
            <IconComponent text={"Island"} icon="/icon/island1.png" />
            <IconComponent text={"Camping"} icon="/icon/tent1.png" />
            <IconComponent text={"Apartment"} icon="/icon/apartment1.png" />
            <IconComponent text={"House"} icon="/icon/home1.png" />
            <IconComponent text={"Lakefront"} icon="/icon/cottage1.png" />
            <IconComponent text={"Farm house"} icon="/icon/barn1.png" />
            <IconComponent text={"Treehouse"} icon="/icon/treehouse1.png" />
            <IconComponent text={"Cabins"} icon="/icon/cabin1.png" />
            <IconComponent text={"Castles"} icon="/icon/castletower1.png" />
          </div>

        </div>
    );
}
export default Navbar