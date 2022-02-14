import { useState } from 'react'
import Todo from './Todo'

const UseRefExample3 = () => {
    const [isToggled, setIsToggled] = useState(true)

    return (
        <div>
            { isToggled && <Todo /> }
            <button className='btn btn-primary' onClick={() => setIsToggled(!isToggled)}>Toggle</button>
        </div>
    )
}

export default UseRefExample3