
function Icons(props){
    return(
        <div className="flex flex-row gap-1">
            <img src={props.icon} alt="filter"/>
            <p>{props.num}</p>
        </div>
    )
}
export default Icons