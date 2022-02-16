import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initialValue))

    const setValue = value => {
        // Check if value is a function:
        const valueToStore = value instanceof Function ? value(localStorageValue) : value

        // Set value to state:
        setLocalStorageValue(value)

        // Set value to local storage:
        localStorage.setItem(key, JSON.stringify(valueToStore))
    }

    return [localStorageValue, setValue]
}

const getLocalStorageValue = (key, initialValue) => {
    const itemFromStorage = localStorage.getItem(key)

    return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage