import { useCount } from "./useCount";

// eslint-disable-next-line react/prop-types
function Counter({ initialCount }) {
  // not need for testing the hook, if it is used in one component. You should always test the component then
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
