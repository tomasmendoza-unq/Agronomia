import { useState } from "react";

const useSelect = () => {
    const [is, setIsActive] = useState<number | string>();
    
    const onActive = (value: number | string) => setIsActive(value);

    const isActive = (value: number | string) => is === value

    return {isActive, onActive}
} 

export default useSelect;