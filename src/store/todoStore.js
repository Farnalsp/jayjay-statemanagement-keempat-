import create from 'zustand';

export const useTodoStore = create((set, get) => ({
    todoList: [{
        id: 1,
        title: "Ayam Bakar",
        counter: 0
      },
      {
        id: 2,
        title: "Ayam Goreng",
        counter: 0
      },
      {
        id: 3,
        title: "Sate Ayam",
        counter: 0
      }],
      setTodoList: (newTodoList) => set({ todoList: newTodoList }),
      increaseCounter: (idx) => {
        const newTodoList = [...get().todoList];
        newTodoList[idx].counter = newTodoList[idx].counter + 1;
        set({ todoList: newTodoList });
      }
}));
