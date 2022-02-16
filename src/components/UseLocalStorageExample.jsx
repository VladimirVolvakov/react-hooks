import useLocalStorage from './custom hooks/useLocalStorage'

const UseLocalStorageExample = () => {
    const [task, setTask] = useLocalStorage('task', '')

    return (
        <form className='w-50'>
            <div className='mb-3'>
                <label className='form-label'>Task</label>
                <input className='form-control' type='text' value={task} onChange={e => setTask(e.target.value)} />
            </div>
        </form>
    )
}

export default UseLocalStorageExample