import React, {useState} from 'react'

function Todo() {
    const[title, setTitle] = useState("");
    const[todoList, setTodoList] = useState([]);


    const handleChange = (e) =>{
        setTitle(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newTodo ={
            id: Date.now(),
            title: title,
        }

        setTodoList([...todoList, newTodo]);
        setTitle("");
        
       
    };

   

    const edit = (id) =>{
        const editTodo = todoList.find((item) => item.id === id)

        setTitle(editTodo.title)

        const updateList = todoList.filter((item) => item.id !== id)

        setTodoList(updateList)


    }

     const remove = (id) =>{
        const updateList = todoList.filter((item) => item.id !== id)

        setTodoList(updateList)

    }


  return (
    <div className='flex flex-col justify-center items-center gap-8'>
        <h1 className='text-3xl font-bold py-4 '>TODO APP</h1>
        <div className=''>
            <form className='flex gap-3' onSubmit={handleSubmit}>
                <label className='text-2xl'>Enter the task</label>
                <input type="text" placeholder='Enter task' value={title} onChange={handleChange} className='border-1 px-5 bg-gray-300' />
                <button type="submit" className='bg-violet-400 px-4 py-2 shadow-none rounded-lg text-xl font-bold'>Add</button>
            </form>
              <section className='mt-5'>
                    <h1 className='text-2xl font-bold'>Task List</h1>{
                        todoList.map((item) =>(
                             <div key={item.id} className='flex gap-3 items-center mt-2'>
                               <p>{item.title}</p>
                               <button onClick={()=>edit(item.id)} className='bg-green-800 text-white px-2 py-1 rounded-lg'>Edit</button>
                               <button onClick={()=>remove(item.id)} className='bg-red-800 text-white px-2 py-1 rounded-lg'>Delete</button>              
                              </div>
                            
                        ))
                    }
                </section>

               
            
    
        </div>
    </div>
  )
}

export default Todo