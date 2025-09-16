import React from "react";

function IconComponent(){
    const props = [
        {id:1, text: "Rooms", icon: "/icon/livingroom.png", label:'Rooms'},
        {id:2, text: "Mansion", icon:"/icon/mansion.png", label:'mansion'},
        {id:3, text: "Countryside", icon:"/icon/mansion.png", label:'Countryside'},
        {id:2, text: "Villa", icon:"/icon/mansion.png", label:'Villa'},
        {id:2, text: "Tropical", icon:"/icon/palmtree1.png", label:'Tropical icon'},
        {id:2, text: "New", icon:"/icon/keychain1.png", label:'Keychain icon'},
        {id:2, text: "Amazing pool", icon:"/icon/swimmingpool1.png", label:'Swimming pool icon'},
        {id:2, text: "Beach house", icon:"/icon/tent1.png", label:'Vacation icon'},
        {id:2, text: "Island", icon:"/icon/island1.png", label:'Villa'},
        {id:2, text: "Camping", icon:"/icon/apartment1.png", label:'Villa'},
        {id:2, text: "Apartment", icon:"/icon/home1.png", label:'Villa'},
        {id:2, text: "House", icon:"/icon/cottage1.png", label:'Villa'},
        {id:2, text: "Lakefront", icon:"/icon/barn1.png", label:'Villa'},
        {id:2, text: "Farm house", icon:"/icon/treehouse1.png", label:'Villa'},
        {id:2, text: "Treehouse", icon:"/icon/cabin1.png", label:'Villa'},
        {id:2, text: "Cabins", icon:"/icon/castletower1.png", label:'Villa'},
    ]

    // Generate the JSX elements for each property
    
    const Bigpropsn = props.map((item) => (
        <div key={item.id} className="flex flex-col items-center gap-1">
            <img src={item.icon} alt={item.label} />
            <p>{item.text}</p>
        </div>
    ))
    return(
        <div className="flex flex-row gap-7 overflow-x-scroll p-4 py-2">
            {Bigpropsn}
        </div>
    )
}
export default IconComponent