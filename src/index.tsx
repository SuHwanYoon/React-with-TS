import React from 'react';
import ReactDOM from 'react-dom/client';
// 글로벌 스타일 시트를 가져옴
import './index.css';
// 앱의 메인 컴포넌트를 가져옴
import App from './App';
import reportWebVitals from './reportWebVitals';


// ReactDOM의 createRoot 메서드를 사용하여 
// public/index.html 파일의 <div id="root"></div> 요소를 root로 설정함
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement// 'root'라는 id를 가진 DOM 요소를 찾음
);

// root 요소에 React 컴포넌트를 렌더링함
root.render(
  <React.StrictMode>
    <App />{/* App 컴포넌트를 렌더링 */}
  </React.StrictMode>
);

// 웹 성능을 측정하려면 reportWebVitals에 콜백 함수를 전달하면 됨
// 예: reportWebVitals(console.log)
reportWebVitals();
