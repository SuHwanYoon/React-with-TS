import React from 'react';
import './NewGoal.css'


const NewGoal = () => {

    const addGoalHandler = (event: React.FormEvent) => {
        //브라우저 기본동작을 막기위해서
        event.preventDefault();
        const newGoal = {
            id : Math.random().toString(),
            text: "My New Goal!"
        }

        console.log(newGoal)
    }

    return(
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" />
            <button type="submit">목표 추가</button>
        </form>
    )
}

export default NewGoal;