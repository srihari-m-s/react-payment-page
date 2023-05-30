import "./Subscription.css";

function Subscription(props){

    let final = Math.round(props.price/props.months);

    const changeChecked = () => {
        const elem = document.getElementById(final);
        
            elem.checked = true;
        
    }
    

    return(
        <>
            <div className="border-2 border-gray-500 flex flex-row justify-between items-center w-full p-2 rounded-lg text-xs" onClick={() => { if(props.dis === false){props.handleClick(props.price); changeChecked()} else {props.handleClick(18500); changeChecked()}}}  style={props.style}>
                <div className='flex flex-row gap-x-2' >
                    <input type="radio" name="price" id={final} className="cursor-pointer"/>
                    <p>{props.months} Months Subscription</p>
                </div>
                
                <div className='w-20'>
                    <p>Total <span class="text-base ml-1">₹{props.price}</span></p>
                    <p>₹{final} <span class="grey">/mo</span></p>
                </div>
            </div>
        </>
    )
}

export default Subscription;