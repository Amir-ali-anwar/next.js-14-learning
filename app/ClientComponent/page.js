'use client'
import { useState, useEffect } from "react"

export default function ClientComponent() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchTodo = async (controller) => {
        try {
            setError(false)

            const response = await fetch('https://jsonplaceholder.typicode.com/todos', { signal: controller.signal })
            const data = await response.json()
            setData(data)
            setLoading(false)
        } catch (error) {
            if(error.name !== 'AbortError'){
                 setError(error)
            }
        }
    }

    useEffect(() => {
        const controller = new AbortController()
        fetchTodo(controller)
        return () => {
            controller.abort()
        }
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
        <ul className="mt-8">
            {data?.map((item, index) => (
                <li
                    key={item.id}
                    className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
                >
                    <h2 className="text-lg capitalize">{item?.title}</h2>
                </li>
            ))}
        </ul>
    )
}
