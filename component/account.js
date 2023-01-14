import { useState } from "react";
import Link from 'next/link';

const Account = () => {
    const[show, setShow] = useState(false)

function setFnc(){
setShow(!show)
}

    return ( 
        <div>
            <button onClick={setFnc}>Account</button>
               {show && ( <div>
                    <ul>
                        <li><Link href='/'>Register</Link></li>
                        <li><Link href='/login'>Login</Link></li>
                    </ul>
                </div>
                )}
        </div>
     );
}
 
export default Account;