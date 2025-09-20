import {useState, useEffect} from "react"

export const useDebounce = (val: any, delay: number): any=> {
    const[debVal, setDebVal] = useState(val)

    useEffect(()=> {
        const debounce = setTimeout(()=> setDebVal(val), delay)

        return()=> clearTimeout(debounce)

    },[val,delay])

    return debVal;
}