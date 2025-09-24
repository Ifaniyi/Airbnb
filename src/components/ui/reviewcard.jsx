export default function ReviewCard(){
    const cards = [
        {
            id:1,
            src: "/icon/Frame118.png",
            name: "Kerry", 
            duration: "3 years on ALX", 
            date: "March 2024", 
            trip: "family trip", 
            description: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking",
            alt: "filter"
        },
       
    ]

    const BigCards = cards.map((item) => (
        <div key={item.id}>
            <img src={item.src} alt={item.alt} />
            <h2>{item.name}</h2>
            <p>{items.duration}</p>
            <h3><span>{item.date}</span><span>{item.trip}</span></h3>
            <p>{item.description}</p>
        </div>
    ))

    return(
        <div>
           {BigCards}
        </div>
    )
}