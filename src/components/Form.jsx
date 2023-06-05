import Subscription from './Subscription';
import { useState } from 'react';


function Form(){

    const [finalPrice, setFinalPrice] = useState(18500);

    const styles = {backgroundColor:"#999", color:"#666"};
    
    const handleClick = (final) => {
        setFinalPrice(final);
    }

    const numberFormat = new Intl.NumberFormat('en-US');

    return (
        <div className='w-[80%] md:w-[60%] lg:w-[22.5%] h-max lg:h-max p-4 my-32 flex justify-between text-sm text-black bg-white rounded-3xl form-cont'>
            <form className='flex flex-col items-center justify-center w-full gap-y-3 cursor-pointer' id='price-form'>

                <div className='flex flex-row justify-around w-[80%] m-0 p-0'>
                    <div className="flex flex-col justify-center items-center gap-y-2">
                        <button className="bg-blue-600 rounded-[50%] w-8 h-8 text-white" id="sign-in">1</button>
                        <label htmlFor="sign-in">Sign in</label>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-2">
                        <button className="bg-blue-600 rounded-[50%] w-8 h-8 text-white" id="subscribe">2</button>
                        <label htmlFor="subscribe">Subscribe</label>
                    </div>
                </div>

                <h2 className="message">Select your subscription plan</h2>

                <Subscription months={12} price={99} dis={true} handleClick={handleClick} style={styles} />
                <Subscription months={12} price={179} dis={false} handleClick={handleClick} style={{borderColor: "#47ba68"}} />
                <Subscription months={6} price={149} dis={false} handleClick={handleClick}/>
                <Subscription months={3} price={99} dis={false} handleClick={handleClick}/>
                <hr className='h-[2px] w-full bg-black'/>

                <div className='flex flex-row w-full justify-between items-center px-4'>
                    <h3>Subscription Fee</h3>
                    <h3>₹ 18,500</h3>
                </div>

                <div className='flex flex-col w-full justify-between px-4 py-1 bg-red-400 gap-y-4 rounded-lg border-2 border-red-800'>
                    <div className='flex flex-row w-full justify-between'>
                        <h3 className='red'>Limited time offer</h3>
                        <h3 className='black'>- ₹ {numberFormat.format(18500 - finalPrice)}</h3>
                    </div>

                    <div className='flex flex-row w-full justify-start px-4'>
                        <img src="./assets/clock2.svg" alt="clock icon" className='w-5 bg-red-600 mr-4 rounded-full'/>
                        <h3 className='red'>Offer valid till 25th March 2023</h3>
                    </div>
                </div>

                <div className='flex flex-row w-full justify-between items-center px-4'>
                    <h3><b>Total</b> (Incl. of 18% GST)</h3>
                    <h2 className='text-2xl'>₹ {numberFormat.format(finalPrice)}</h2>
                </div>

                <div className='flex flex-row w-full justify-around items-center'>
                    <button className="text-xs md:text-lg border-2 w-48 h-10 rounded-full border-red-600 text-red-600" id="cancel">CANCEL</button>
                    <button type="submit" className="text-xs md:text-lg border-2 w-48 h-10 rounded-full bg-green-600 border-green-600 text-white" id="pay">PROCEED TO PAY</button>
                </div>

                <div className='flex flex-row justify-start w-full'>
                    <img src="./assets/razorpay-icon.svg" alt="RazorPay logo"/>   
                </div>
                  

            </form>
        </div>
    )
}

export default Form;