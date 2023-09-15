import { useCount } from "./useCount";

// eslint-disable-next-line react/prop-types
function Counter({ initialCount }) {
  const { count, incrementCount, decrementCount } = useCount(initialCount || 0);
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span data-testid="count">{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default Counter;
