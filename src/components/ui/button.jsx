function Button(props){
    return(
        <div>
            <button className={props.className}>{props.icon} {props.button} 
            </button>
        </div>
    )
}
export default Button