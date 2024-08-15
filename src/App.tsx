import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";


type Goal = {
  id: string,
  text: string
}

function App() {
  //리랜더링을 위한 useState
  const [courseGoals,setCourseGoals] = useState(
    [
      { id: "코스목표1", text: "Finish the Course" },
      { id: "코스목표2", text: "Learn all about the Course Main Topic" },
      { id: "코스목표3", text: "Help other students in the Course Q&A" },
    ]
  )


  const addNewGoalHandler  = (newGoal:Goal) => {
    // courseGoals.push(newGoal)
    // console.log(courseGoals)
    // return courseGoals;
    //concat메서드로 인자를 전달한 새로운 배열을 랜더링
    //1번방식
    // 이 방식은 courseGoals의 '현재 상태를 직접 참조'하여 새로운 상태를 설정함.
    // 만약 setCourseGoals가 호출될 때 courseGoals 상태가 이미 변경되었을 경우, 최신 상태를 반영하지 않을 수 있음.
    // React의 상태 업데이트는 비동기적으로 실행되기 때문에, 이 방식은 상태 업데이트의 순서와 동기화 문제를 야기할 수 있음.
    // setCourseGoals(courseGoals.concat(newGoal))

    //2번방식
    // setCourseGoals에 prevCourseGoals이라는 콜백 함수를 전달하여 이전 상태(prevCourseGoals)를 기반으로 새로운 상태를 계산함.
    // React는 이 콜백 함수가 호출될 때 항상 최신 상태를 제공함, 따라서 최신 상태를 기반으로 안전하게 상태를 업데이트할 수 있음.
    // 상태 업데이트가 여러 번 발생할 때, 상태의 일관성을 보장함.
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal)
    })

  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      {/* App-> NewGoal로 함수 참조 포인터를 전달 , NewGoal -> App으로 함수 반환 데이터 전달*/}
      <NewGoal onAddGoal={addNewGoalHandler}/>
      {/* App-> GoalList컴포넌트로 자료전달케이스////속성을 사용하여 해당 컴포넌트에 courseGoals배열을 전달 */}
      <GoalList goals={courseGoals}/>
    </div>
  );
}

export default App;
