import { useEffect, useRef, useState } from "react"

export const usePrev = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;    // 0
    }, [value]);

    return ref.current;    // undefined
}

// react returns first, effect gets called later
// yaha suppose useRef me 1 vaalue daale 
