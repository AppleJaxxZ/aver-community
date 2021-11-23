import React from 'react';
import './directions.styles.scss'

const Directions = () => {
    return (
        <div>
            <h1>Welcome To Aver-Sms!</h1>
           <h2>Fill in all input fields in the exact format or else Aver-Sms will NOT work properly or at all.  </h2>  
            <ol className='directions-list'>

                <li>Enter in Your AverHealth Pin number.</li>
                <li>Enter Date Of Birth as shown- you must use "/" or else it wont work! ex: 01/20/1999 </li>
                <li>Enter your phone number, start with a +1 then your number without dashes.  ex: 1484654321</li>
                <li>Press Start! </li>
                <p>After you press start the scheduler will begin.  Dont expect anything to happen right away.  The scheduler
                    will send you an SMS text message style alert to your cell phone number sometime between 9:30 and 10pm everynight.  
                    It may send you reminder alerts throughout the following day with the same message.  Remember the message that you receive
                    after 9:30pm is the message that is telling you your scheduled time for the next day.  If you DO have a scheduled
                    test then it will also tell you what time AverHealth is open until, so keep and eye on the date and office hours!

                    <h3>I do not keep your AverHealth schedule information, your date or your pin, all the data is saved locally on your device!</h3>
                
                </p>
            </ol>
        </div>
    )
}

export default Directions;



      {/* <h4>Hello everyone, Alex Z here, I am really excited to share this piece of software with the rest of you! 
                I built this application because I kept missing my scheduled days, then I decided I would share this software 
                with everyone because you know..power to the people!  I hope you find this application helpful and enjoy the benfits 
                of not having to try to remember everyday to call into Aver Health's hotline.  </h4> */}
