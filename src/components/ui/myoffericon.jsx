export default function Myoffericon(props){
    return(
        <section className="flex gap-2 p-2 m-2">
            <img src={props.offericon} alt="filter" />
            <p className="text-xl">{props.offertext}</p>
        </section>
    )
}