import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";


function App() {
  const courseGoals = [
    { id: "코스목표1", text: "Finish the Course" },
    { id: "코스목표2", text: "Learn all about the Course Main Topic" },
    { id: "코스목표3", text: "Help other students in the Course Q&A" },
  ];

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal />
      {/* 속성을 사용하여 해당 컴포넌트에 데이터를 전달 */}
      <GoalList goals={courseGoals}/>
    </div>
  );
}

export default App;
