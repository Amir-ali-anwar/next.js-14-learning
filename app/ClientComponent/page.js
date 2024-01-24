'use client'
import { useState, useEffect } from "react"
export default function ClientComponent() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const fetchTodo = async () => {
        try {
            // setLoading(true)
            setError(false)
            const controller = new AbortController()
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', { signal: controller.signal })
            const data = await response.json()
            console.log({ data });
            setData(data)
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }
    useEffect(() => {
        fetchTodo()
    }, [])
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
    if (data?.length === 0) {
        return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>;
    }
    return (
        <ul className="mt-8">
            {
                data?.map((item,index) => {
                   
                    <li
                        key={item.id}
                        className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
                    >   <h2 className="text-lg capitalize">{item?.title}</h2>

                    </li>
                })
            }
        </ul>
    )
}