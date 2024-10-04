import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./inc/Layout";
import Home from "./components/Home";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import DraggableComponent from "./components/DraggableComponent";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route inidex element={<Home />} />
                        <Route path="counter" element={<Counter />} />
                        <Route path="todo" element={<TodoList />} />

                        {/* Drag and Drop 컨텍스트로 DraggableComponent 감싸기 */}
                        <Route path="dnd" element={
                            <DndProvider backend={HTML5Backend}>
                                <DraggableComponent />
                            </DndProvider>
                        } />

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;