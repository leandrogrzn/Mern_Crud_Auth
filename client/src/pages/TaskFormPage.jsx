import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TasksContext'

function TasksFormPage() {
    const { register, handleSubmit } = useForm()
    const { createTask } = useTasks()
    

    const onSubmit = handleSubmit((data) => {
        createTask(data)
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