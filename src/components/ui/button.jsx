function Button(props){
    return(
        <div>
            <button className={props.className}>{props.button} 
            </button>
        </div>
    )
}
export default Button