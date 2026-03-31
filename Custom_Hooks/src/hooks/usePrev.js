import { useEffect, useRef } from "react"

export const usePrev = (value) => {
    const ref = useRef();  
    // refs let us store a value in a variable 
    // and whenever that value changes, the component
    // doesnot re-render
    // When we use a useRef hook, the ref can be used to store a value
    // and if we keep on updating that value for many times
    // it will not re-render the component

    useEffect(() => {
        ref.current = value;    // 0
    }, [value]);

    return ref.current;    // undefined
}

// react returns first, effect gets called later
// yaha suppose useRef me 1 value daale 
