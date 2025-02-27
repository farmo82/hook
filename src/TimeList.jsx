import Item from "./item";

const TimeList = (props)=>{
    console.log(props.children);
    return(
        <div className="main_time_list">
            {/* <Item>{props.children[0]}</Item>
            <Item>{props.children[1]}</Item> */}

            {props.children.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))}

        </div>
    )
}

export default TimeList;