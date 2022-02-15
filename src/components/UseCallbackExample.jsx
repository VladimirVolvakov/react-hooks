import { useCallback, useState } from 'react'
import Button from './Button'

const UseCallbackExample = () => {
    const [tasks, setTasks] = useState([])

    const addTask = useCallback(() => {
        setTasks((prevState) => [...prevState, 'Some Task'])
    }, [setTasks])

    return (
        <div>
            <Button addTask={ addTask } />
            { tasks.map((task, index) => <p key={index}>{task}</p>)}
        </div>
    )
}

export default UseCallbackExample