
export default function Input(props) {
    return(
        <div className="">
            <label forHtml={props.name} className="text-lg"> {props.label}   </label>
            <input type={props.text} placeholder={props.placeholder} id={props.name} name={props.name} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" />
        </div>
    )
}