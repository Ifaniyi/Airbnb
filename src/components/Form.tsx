import Input from "./ui/input";

function Form() {
    return(
        <>
            <Input text="date" label="Check in" placeholder="DD/MM/YY" name="check_in" />
            <Input text="date" label="Check out" placeholder="DD/MM/YY" name="check_out"/>
        </>
    )
}
export default Form;