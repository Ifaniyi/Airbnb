export default function Label(props){
    return (
        <div className="">
            <label forHtml={props.name} className="text-lg"> {props.firstname}   </label>
            <input type={props.text} placeholder={props.placeholder} id={props.name} name={props.name} src={props.src} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent" />
        </div>
    )
}