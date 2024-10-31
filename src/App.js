import './App.css';
import { useNavigate } from 'react-router-dom';
import { useTodoStore } from './store/todoStore';
function App() {
  const navigate = useNavigate();
  const { todoList, increaseCounter } = useTodoStore();
  return (
    <div className="App">
      {todoList && todoList.map((todoItem, idx) => {
        return (
          <div key={todoItem.id} style={{padding: '16px', borderBottom: '1px solid #000' }}>
            <span>{todoItem.title}</span>
            <span style={{marginLeft: '16px' }}>{todoItem.counter}</span>
            <button onClick={() => increaseCounter(idx)} style={{marginLeft: '8px'}}>+</button>
            <button onClick={() => navigate(`/detail/${todoItem.id}`)} style={{ marginLeft: '8px' }}>Detail</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;