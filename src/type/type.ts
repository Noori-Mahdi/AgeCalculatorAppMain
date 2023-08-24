export type StateType = {
    id:number,
    type:string,
    count:number,
    valid:boolean
}

export type StateTypeProps = {
    state : StateType[];
    onValuePrametr : (value:number,inputId:number) => void;
}