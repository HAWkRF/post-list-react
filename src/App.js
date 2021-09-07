import React, { useState, useRef } from "react";
import { PostItem } from "./components/PostItem";
import { PostList } from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript 1", body: "Lorem ipsum dolor sit amet." },
    { id: 2, title: "Javascript 2", body: "Lorem ipsum dolor sit amet consectetur adipisicing." },
    { id: 3, title: "Javascript 3", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, voluptas." },
  ]);

  const [title, setTitle] = useState('');
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);

  }

  return (
    <div className="App">
      <form>
        {/* Управл. комп-нт */}
        <MyInput value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Заголовок" />
        {/* Неуправляемый (некотролируемый) компонент */}
        <MyInput ref={bodyInputRef} type="text" placeholder="Описание" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
