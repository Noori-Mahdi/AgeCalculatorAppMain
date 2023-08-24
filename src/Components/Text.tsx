type TextProps ={
    textType : string
    count: number
}

const Text = ({textType,count}:TextProps) => {

    const format = () =>{
        if(count <= -1 ){
            return "--";
        }else{
            return count;
        }
    }

    return ( 
        <div>
            <span>{format()}</span><span>{textType}</span>
        </div>
     );
}
 
export default Text;