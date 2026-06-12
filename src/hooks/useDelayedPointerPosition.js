import { useState, useEffect } from "react";
export function useDelayedPointerPosition(position, delay){
    const [value, setValue] = useState(position);
    useEffect(()=>{
        setTimeout(()=>{
            setValue(position);
        }, delay)
    }, [position, delay])
    return value;
}