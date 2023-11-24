import { useState, useEffect } from 'react';
export function useDebounce(value, delay = 300){
    const [debaunce, setDebaunce] = useState(value)

    useEffect(()=>{
        const handle = setTimeout(() => setDebaunce(value), delay);
        return ()=> clearTimeout(handle)
    }, [value, delay])

    return debaunce
}