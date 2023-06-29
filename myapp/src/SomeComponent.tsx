import { useState } from "react";
import { ChildComponent } from "./ChildComponent";

export function SomeComponent() {
    const [someState, setSomeState] = useState('something');
    
    return(
        <div>
            <ChildComponent />
            <button onClick={() => setSomeState('Something else')}>Set</button>
        </div>
        // a component re-renders when its state changes
        // child component is re-rendered when its parent component is re-rendered
    ) // -> So, when someState changes, SomeComponent, ChildComponent, AnotherChildComponent will re-render
}


