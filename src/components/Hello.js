import { useState } from 'react';
import UserName from './UserName';

export default function Hello(props) {
    //let name = 'Mike';
    const [name, setName] = useState("Mike");
    const msg  = props.age > 19 ? "성인입니다." : "미성년자 입니다.";

    return(
        <div>
            <h1>state</h1>
            <h2 id="name">{name}({props.age}){msg}</h2>
            <UserName name={name}/>
            <button onClick={() => {
                setName(name === "Mike" ? "Jane" : "Mike");
            }}>chagne</button>
        </div>
    )
}