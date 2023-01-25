//COMOPONENTS
import AddTodo from "./components/AddTodo";
import Content from "./components/Content";
import Header from "./components/Header";
//CONTEXT
import TodoContextProvider from "./context/TodoContextProvider";

function App() {
  return (
    <TodoContextProvider>
      <div className="App ">
        <div className="w-10/12 mx-auto bg-teal-500 my-10 rounded-xl py-4">
          <Header />
          <hr className="w-11/12 mx-auto" />
          <Content />
          <AddTodo />
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
