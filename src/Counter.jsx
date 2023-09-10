import { useCount } from "./useCount";

function Counter() {
  const initialCount = 0;
  const { count, incrementCount, decrementCount } = useCount(initialCount);
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      {count}
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default Counter;
