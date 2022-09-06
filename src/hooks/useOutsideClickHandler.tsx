import {createRef, RefObject, useEffect} from "react";

export default function useOutsideClickHandler(ref:RefObject<HTMLElement>, handler:()=>void) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */

        function handleClickOutside(event:any) {
            if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
