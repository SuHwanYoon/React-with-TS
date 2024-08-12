import React from "react";
import "./GoalList.css";

type Goal = {
  id: string;
  text: string;
};

// GoalListProps 인터페이스 정의, goals prop은 Goal 타입의 배열로 정의
interface GoalListProps {
  goals: Goal[];
}

// GoalList 컴포넌트에 props 타입 적용
const GoalList: React.FC<GoalListProps> = (props) => {
  return (
    <ul className="goal-list">
      {props.goals.map((goal) => {
        return <li key={goal.id}>{goal.text}</li>;// 각 목표를 리스트로 렌더링
      })}
    </ul>
  );
};

export default GoalList;
