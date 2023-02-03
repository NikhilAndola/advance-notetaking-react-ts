// const foo = <T extends unknown>(x: T) => x;
// const foo = <T, >(x: T) => x;

import * as React from 'react';

export function useLocalStorage<T>(key:string, initialValue: T | (() => T)) {

    const [value, setValue] = React.useState<T>(() => {
        const jsonValue = localStorage.getItem(key);
        if(jsonValue == null) {
            if( typeof initialValue === 'function') {
                return (initialValue as () => T)()
            } else {
                return initialValue
            }
        } else {
            return JSON.parse(jsonValue)
        }
    });

    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [ value, setValue ] as [T, typeof setValue]
}