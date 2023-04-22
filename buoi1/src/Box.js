function Box(props) {
  return (
    <div onClick={props.handle_click}>
      <h1>
        My name is {props.name}, im {props.old} years old
      </h1>
    </div>
  );
}
export default Box;
