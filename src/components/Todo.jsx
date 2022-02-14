import { useEffect, useRef, useState } from 'react'

const Todo = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [todo, setTodo] = useState({})

    const isMounted = useRef(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    if (isMounted.current) {
                        setTodo(data.title)
                        setIsLoading(false)
                    }
                }, 3000)
            })
            return () => {
                isMounted.current = false
            }
    }, [isMounted])
    return (
        isLoading ? <h3>Loading...</h3> : <h1>{todo}</h1>
    )
}

export default Todo