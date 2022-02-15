import React from 'react'

const Button = React.memo(({ addTask }) => {
    console.log('Button rendered')
    return (
        <div>
            <button className='btn btn-secondary' onClick={ addTask }>Add Task</button>
        </div>
    )
})

export default Button