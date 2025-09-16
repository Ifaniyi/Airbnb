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

        <div className="flex gap-4 bg-emerald-700 p-4 h-auto w-full flex-row justify-center items-center">
          <img src="/icon/Case.png" alt="airplane" className="w-8 h-8"/>
          <h1 className="text-white">Overseas trip? Get the latest information on travel guides</h1>
          <Button button={"More info"} className="bg-black text-white rounded-full p-1 items-center justify-center"/>
        </div>

        <div className="flex flex-row gap-4 p-4 border-b border-gray-600 justify-center items-center">
        <div className="flex-row justify-start items-start w-83">
              <Logo />
        </div>

          <div className="flex justify-center gap-2 p-5 justify-start items-start border-1 border-gray-200 rounded-2xl shadow rounded-full">
            <div>
               <Search />
           </div>
           <div className="border-l-2 border-gray-300 pl-4 flex">
               <Checkin />
            </div>
            <div className="border-l-2 border-gray-300 pl-4 flex">
               <Checkout />
            </div>
            <div className="border-l-2 border-gray-300 pl-4 flex">
                <People />
                <SearchBar />
            </div>
          </div>

          <div className="flex justify-center gap-2 p-3 justify-end items-end w-83">
            <Button button={"Sign in"} className="bg-emerald-700 text-white rounded-full p-3"/>
            <Button button={"Sign up"} className="rounded-full p-3 border border-gray-200"/>
          </div>

        </div>

          <div className="flex flex-row gap-7 overflow-x-scroll p-4 py-2">
            <IconComponent />
          </div>

        </div>
    );
}
export default Navbar