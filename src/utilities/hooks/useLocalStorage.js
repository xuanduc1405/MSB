import { useEffect } from 'react'

const useLocalStorageChange = ({ callback }) => {
    useEffect(() => {
        if (window) window.addEventListener("storage", callback);

        // init handle local storage event in same tab
        const originalSetItem = localStorage.setItem;
        localStorage.setItem = function (key, value) {
            const event = new CustomEvent('storage', { detail: { [key]: value } });
            window.dispatchEvent(event);
            originalSetItem.apply(this, arguments);
        };
        const originRemoveItem = localStorage.removeItem;
        localStorage.removeItem = function () {
            const event = new CustomEvent('storage', {});
            window.dispatchEvent(event);
            originRemoveItem.apply(this, arguments);
        };
        return () => {
            if (window) window.removeEventListener("storage", callback);
        };
    }, []);
}

export default useLocalStorageChange;