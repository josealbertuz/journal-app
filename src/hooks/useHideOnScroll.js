import { useState, useEffect } from 'react';

export const useHideOnScroll = () => {

    const [hide, setHide] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    
    useEffect(() => {
        
        if(scrollTop >= 100){
            setHide(true);
        }

    }, [scrollTop]);
    
    return {
        hide,
        setScrollTop
    }

}