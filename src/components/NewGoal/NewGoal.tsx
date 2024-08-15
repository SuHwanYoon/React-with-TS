import React, { useState } from 'react';
import './NewGoal.css'

interface NewGoalProps{
    onAddGoal: (goal: {id: string, text: string}) => void
}

//NewGoal 컴포넌트가 반환할 함수의 반환값타입을 지정
const NewGoal: React.FC<NewGoalProps> = props => {

    //초기값이 빈문자열인 상태훅
    const [enteredText, setEenteredText] = useState('')

    const addGoalHandler = (event: React.FormEvent) => {
        //브라우저 기본동작을 막기위해서
        event.preventDefault();
        const newGoal = {
            id : Math.random().toString(),
            text: enteredText
        }

        //목표 추가 버튼을 누를때마다 텍스트박스 빈문자열로 초기화를 위해 set상태함수호출
        setEenteredText("")
        
        //App 컴포넌트에서 받은 함수실행(인수전달) 
        props.onAddGoal(newGoal)
    }
    //event가 폼 요소의 변경 이벤트(ChangeEvent)이고 <HTMLInputElement>로 이벤트가 Input요소에서 발생했음을 명시
    const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        //set함수에 입력값을 인자로 건넨다
        setEenteredText(event.target.value)
    }

    return(
        //form 양식이 제출될때 addGoalHandler함수 참조
        <form className="new-goal" onSubmit={addGoalHandler}>
            {/* 상태훅의 값을 value속성에 할당 */}
            <input type="text" value={enteredText} onChange={textChangeHandler}/>
            <button type="submit">목표 추가</button>
        </form>
    )
}

export default NewGoal;