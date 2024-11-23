import { useEffect, useState } from "react";

const Example = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    });

    function countHandler(){
        setCount(count+1);
    }

    return (
        <div>
            <h3>You clicked {count} times</h3>
            <button onClick={countHandler}>
                Click me!
            </button>
        </div>
    );
};

export default Example;