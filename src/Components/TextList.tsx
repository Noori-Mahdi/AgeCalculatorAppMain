import Text from "./Text";
import { StateTypeProps } from "../type/type";

const TextList = ({state}:StateTypeProps) => {
    return ( 
        <div className="textBx">
            {state.map((e) => {
                return(
                    <Text textType={e.type} count={e.count}/>
                )
            })}
        </div>
     );
}
 
export default TextList;