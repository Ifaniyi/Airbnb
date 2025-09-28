export default function ReviewCard(){
    const cards = [
        {
            id:1,
            src: "/icon/Frame118.png",
            name: "Kerry", 
            duration: "3 years on ALX", 
            date: "March 2024", 
            trip: "Family trip", 
            description: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking",
            alt: "filter"
        },
        {
            id:1,
            src: "/icon/Frame118.png",
            name: "Kerry", 
            duration: "3 years on ALX", 
            date: "March 2024", 
            trip: "Family trip", 
            description: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking",
            alt: "filter"
        },
        {
            id:1,
            src: "/icon/Frame118.png",
            name: "Kerry", 
            duration: "3 years on ALX", 
            date: "March 2024", 
            trip: "Family trip", 
            description: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking",
            alt: "filter"
        },
        {
            id:1,
            src: "/icon/Frame118.png",
            name: "Kerry", 
            duration: "3 years on ALX", 
            date: "March 2024", 
            trip: "Family trip", 
            description: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking",
            alt: "filter"
        },
       
    ]


    return (
        <div className="grid grid-cols-2 gap-6 w">
           {
                cards.map((item) => (
                    <div key={item.id} className="w-90 h-auto ">
                        <div className="">
                            <div className="flex gap-3">
                                <img src={item.src} alt={item.alt} className=""/>
                                <div className="flex flex-col"> 
                                <h2 className="font-semibold ">{item.name}</h2>
                                <p className="text-gray-500">{item.duration}</p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <h3 className="mb-2"><span className="text-lg text-base font-serif">{item.date}</span> . <span className="text-gray-500">{item.trip}</span></h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))
           }
        </div>
    )
}