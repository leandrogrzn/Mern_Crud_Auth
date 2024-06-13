import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TasksContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function TasksFormPage() {
    const { register, handleSubmit, setValue } = useForm()
    const { createTask, getTask, updateTask } = useTasks()
    const navigate = useNavigate()
    const params = useParams()

    useEffect (() => {
        async function loadTask() {
            if(params.id) {
                const task = await getTask(params.id)
                setValue('title', task.title)
                setValue('description', task.description)
            }
        }
        loadTask()
    }, [])

    const onSubmit = handleSubmit((data) => {
        if(params.id){
            updateTask(params.id, data)
        } else {
            createTask(data)
        }
        navigate('/tasks')
    })
    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                <form onSubmit={onSubmit}>
                    <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" type="text" placeholder='Title' {...register("title")} autoFocus/>
                    <textarea className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" rows="3" placeholder='Description' {...register("description")}></textarea>
                    <button>Save</button>
                </form>
            </div>
        </div>
    )
}

export default TasksFormPage