import Input from "./Input";
import { StateTypeProps } from "../type/type";

const InputList = ({state,onValuePrametr}:StateTypeProps) => {

    return ( 
        <form className="d-flex">
            {state.map((e) =>{
                return(
                    <Input valid={e.valid} id={e.id} inputType={e.type} onValuePrametr={onValuePrametr}/>
                )
            })}
        </form>
     );
}
 
export default InputList;