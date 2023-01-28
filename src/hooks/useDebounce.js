import { useEffect, useState } from "react";

function useDebounce(data, delay) {
    const [debounce,setDebounce] = useState(data)
    useEffect(() => {
        const timer = setTimeout(() => setDebounce(data),delay)
        
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])
    return debounce;
}

export default useDebounce;






    
