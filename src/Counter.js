
function Counter({value, onIncrement, onDecrement}) {
  return (
    <div className="App">
      计数器：{value}
      <button onClick={onIncrement}>增加</button>
      <button onClick={onDecrement}>减少</button>
    </div>
  );
}

export default Counter;
