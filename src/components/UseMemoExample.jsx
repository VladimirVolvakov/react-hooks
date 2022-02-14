import { useEffect, useMemo, useRef, useState } from 'react'

const UseMemoExample = () => {
    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)

    //const sqrt = getSqrt(number)
    const sqrt = useMemo(() => getSqrt(number), [number])
    
    const renders = useRef(1)

    useEffect(() => {
        renders.current = renders.current + 1
    }, [])

    const onClick = () => {
        setInc(prevState => {
            console.log(prevState)
            return prevState + 1
        })
    }

    return (
        <div>
            <input type='number' value={number} onChange={e => setNumber(e.target.value)} className='form-control w-25' />
            <h3>Renders: {renders.current.value}</h3>
            <h2 className="my-3">
                The sqrt of {number} is {sqrt}
            </h2>
            <button onClick={onClick} className='btn btn-primary'>Re-render</button>
        </div>
    )
}

function getSqrt(num) {
    return Math.sqrt(num)
}

export default UseMemoExample