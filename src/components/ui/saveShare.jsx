function SaveShare (props) {
    return (
        <div className="flex  gap-2 border border-gray-200 rounded-full bg-gray-100 p-2 w-25 hover:bg-gray-300">
                <img src={props.src} alt="icon" className=""/>
                <span className="">{props.text}</span>
         </div>  
    )
}
export default SaveShare;