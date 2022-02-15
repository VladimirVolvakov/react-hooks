import useFetch from './custom hooks/useFetch'

const UseFetchExample = () => {
    const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts', {})

    if (isLoading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        console.log(error)
    }

    return (
        <div>
            { data.map(item => <p key={ item.id }>{ item.title }</p>)}
        </div>
    )
}

export default UseFetchExample