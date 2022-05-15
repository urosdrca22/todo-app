import React, { useState } from 'react';
import ItemList from './ItemList';


const TodoList = () => {
    
    return (
        <section className='main-section'>
            <h1 className='title'>Stuff I need to do</h1>
            <div className='todo-list'>
                <div className='todo-header'>
                    <h2 className='list-title'>To-do List</h2>
                </div>
                <ItemList />
                
            </div>
        </section>
    )
};

export default TodoList;