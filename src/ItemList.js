import React, { useEffect, useState } from 'react';
import Item from './Item';


const ItemList = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState ([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newItem = {id: new Date().getTime().toString(), title: name, status: false}
            setList ([...list, newItem]);
        }
        setName('');
    }

    const checkItemHandler = (id) => {
        const newTodoList = list.map((item) => {
            if(item.id === id)
                return {...item, status: !item.status}
            return item;
            })
            setList(newTodoList);
        }

    const clearCompletedHandler = () => {
        const newTodoList = list.filter((item) => (item.status === false))
            setList(newTodoList);
    };

    const clearAllHandler = () => {
        setList([]);
    };
        
    return (
        <div className='todo-body'>
            <div className='tasks'>
                {list.map((item) => {
                    return (
                    <Item key={item.id} id={item.id} title={item.title} status={item.status} handleCheckItem={checkItemHandler} />
                    )
                })}
                <div className='new-task-creator'>
                    <form action='' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            className='new task'
                            placeholder='new task name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button className='btn task'
                            aria-label='create new task'>+</button>
                    </form>
                </div>
                <div className='delete-stuff'>
                    <button className='btn delete' onClick={clearCompletedHandler}>Clear completed tasks</button>
                    <button className='btn delete' onClick={clearAllHandler}>Clear all</button>
                </div>
            </div>
        </div>
    )
}

export default ItemList;