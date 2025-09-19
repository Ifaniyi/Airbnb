 import Button from "./ui/button";
import Rooms from "./ui/rooms";
// import Rooms from "./ui/rooms";
// import Villabeach from "./Villabeach";

function Card(){
    const pcards = [
        {
        src:"/icon/image.png",
        alt:"villabeach image",
        Cardwords:"Villa Arrecife Beach House", 
        Location:"Sidemen, Bali, Indonesia",
        Starimage:"/icon/Star_1.png",
        startext: "4.76",
        Downp: "$2,350",
    },    
        {
        src:"/icon/containerimg.png",
        alt:"Entire Cabin image",
        Cardwords:"Entire Cabin", 
        Location:"Nova Friburgo, Brazil",
        Starimage:"/icon/Star_1.png",
        startext: "4.76",
        Downp: "$62",
    },    
        {
        src:"/icon/Imagecontainer1.png",
        alt:"Earthen home image",
        Cardwords:"Earthen home", 
        Location:"Santa Marta, Colombia",
        Starimage:"/icon/Star_1.png",
        startext: "4.76",
        Downp: "$386",
    },    
        {
        src:"/icon/image5.png",
        alt:"Private room image",
        Cardwords:"Private room", 
        Location:"Santa Marta, Colombia",
        Starimage:"/icon/Star_1.png",
        startext:"4.76",
        Downp: "$134",
    },
        {
        src:"/icon/image 6.png",
        alt:"Gokce Turkay image",
        Cardwords:"Gokce Turkay Estate",
        Location:"Kayakoy, Turkey",
        Starimage:"/icon/Star_1.png",
        startext: "4.76",
        Downp: "$980",
    },
        {
        src:"/icon/imagecontainer3.png",
        alt:"Palais Hassoun Marrakech image",
        Cardwords:"Palais Hassoun Marrakech",
        Location:"Marrakech, Morocco",
        Starimage:"/icon/Star_1.png",
        startext: "4.76",
        Downp: "$3,450",
    }
]

const allCards = pcards.map((property) => (
    <div className="">
        <div><img src={property.src} alt={property.alt} className="block w-full"/></div>
         <div className="flex flex-row items-center w-full gap-2">
                <Button button={"Top Villa"} className="border border-gray-200 rounded-full p-1 shadow bg-gray-100"/>
                <Button button={"Self Checkin"} className="border border-gray-200 rounded-full p-1 shadow bg-gray-100"/>
                <Button button={"Free Reschedule"} className="border border-gray-200 rounded-full p-1 shadow bg-gray-100"/>
            </div>
        <div className="flex flex-row flex-wrap  m-4 justify-between ">
            <div>
                <h2 className="">{property.Cardwords}</h2>
                <h4>{property.Location}</h4>
            </div>
            <div className="flex flex-row gap-1">
                <img src={property.Starimage} alt="star icon" className="h-5 w-5"/>
                <p>{property.startext}</p>
            </div>
            <div className="flex flex-row justify-between w-full mt-2">
                <Rooms />
                <div className="mt-4 mr-2 font-semibold">
                    <p>{property.Downp}</p>
                </div>
            </div>
        </div>
    </div>
))


    return(
        <div className="flex flex-col border border-gray-200 rounded shadow-md p-3 ">
            {/* <img src={props.image} alt="card" className="w-84 h-auto rounded-lg" />
            <div className="flex flex-row items-center w-full gap-2">
                <Button button={"Top Villa"} className="border border-gray-200 rounded-full p-1 shadow bg-gray-100"/>
                <Button button={"Self Checkin"} className="border border-gray-200 rounded-full p-1 shadow bg-gray-100"/>
                <Button button={"Free Reschedule"} className="border border-gray-200 rounded-full p-1 shadow bg-gray-100"/>
            </div>
            <div className="flex">
                <Villabeach />
            </div>

            <div>
                <Rooms />
            </div> */
            }
            <div className="flex flex-row w-500 h-auto gap-6 wrap rounded ">{allCards}</div>
            
        </div>
    )
}
export default Card