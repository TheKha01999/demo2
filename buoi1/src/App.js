import StudenList from "./StudentList";
import { useState } from "react";
function App() {
  // let x = 5;
  let [x, setX] = useState(0);
  let [text, setText] = useState("Meo");
  let [name, setName] = useState(" ");
  let [old, setOld] = useState(" ");
  let [check, setCheck] = useState(true);
  let [student, setStudent] = useState({ name: "Nguyen Ho The Kha", old: 24 });
  let [list, setList] = useState([1, 2, 3, 4]);
  const vd = [
    { name: "Heo", old: 2 },
    { name: "Ga", old: 3 },
  ];
  const [animal, setAnimal] = useState(() => {
    let listLocal;
    if (localStorage.getItem("DSsucvat")) {
      listLocal = JSON.parse(localStorage.getItem("DSsucvat"));
    } else {
      listLocal = vd;
    }
    console.log(listLocal);
    return listLocal;
  });
  const handle_increase = () => {
    // setX(x + 1);
    setX((pre) => pre + 1);
    setX((pre) => pre + 1);
  };
  const handle_change_text = () => {
    setText("Heo" + x);
  };
  const handle_submit = (e) => {
    e.preventDefault();
    setText(name);
    setStudent((pre) => ({ ...pre, name: name }));
    setName("");
  };
  const handle_value = (e) => {
    setName(e.target.value);
  };
  const handle_value1 = (e) => {
    setOld(e.target.value);
  };
  const handle_student_list = () => {
    setCheck((pre) => !pre);
  };
  const handle_add = () => {
    setAnimal((pre) => {
      const newAnimal = [...pre, { name: name, old: old }];
      localStorage.setItem("DSsucvat", JSON.stringify(newAnimal));
      console.log("animal", newAnimal);
      return newAnimal;
    });
    setName("");
    setOld("");
  };
  console.log("reload");
  return (
    <div>
      <h3>Up len lan 2</h3>
      <h3>Up len lan 7</h3>
      <h1>{x}</h1>
      <h1>name:{text}</h1>
      <h1>
        Ho va Ten: {student.name}, Tuoi: {student.old} {JSON.stringify(student)}
      </h1>
      <button onClick={handle_increase}>Increase</button>
      <button onClick={handle_change_text}>Changetext</button>
      <form onSubmit={handle_submit}>
        <input
          type="text"
          placeholder="Nhap"
          value={name}
          onChange={handle_value}
        />
      </form>
      <button onClick={handle_student_list}>STUDENT LIST</button>
      {check ? <StudenList /> : ""}
      <ul>
        {list.map((item, key) => {
          return <li>{item}</li>;
        })}
      </ul>

      <ul>
        {animal.map((item, key) => {
          return (
            <li>
              name: {item.name} ---- old:{item.old}
            </li>
          );
        })}
      </ul>
      <button onClick={handle_add}>Add</button>
      <form onSubmit={handle_submit}>
        <input
          type="text"
          placeholder="Nhap"
          value={name}
          onChange={handle_value}
        />
      </form>
      <input
        type="text"
        placeholder="Nhap tuoi"
        value={old}
        onChange={handle_value1}
      />
    </div>
  );
}

export default App;
