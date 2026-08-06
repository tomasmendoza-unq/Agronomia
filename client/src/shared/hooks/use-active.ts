import { useState } from "react";

const useActive = () => {
    const [isActive, setIsActive] = useState(false);
    
    const onActive = () => setIsActive(prevIsVisible => !prevIsVisible);

    return {isActive, onActive}
} 

export default useActive;