import { useParams, useNavigate } from "react-router-dom";
import { useTodoStore } from '../store/todoStore';

function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { todoList, increaseCounter} = useTodoStore();
    return (
        <div>
            <button onClick={() => navigate("/")}>Back</button>
            <h1>Detail Page</h1>
            <p>id: {todoList[id-1].id}</p>
            <p>title: {todoList[id-1].title}</p>
            <p>counter: {todoList[id-1].counter}</p>
            <button onClick={() =>increaseCounter(id-1)}>Tambah</button>
        </div>
    );
}
export default Detail;