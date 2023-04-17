import {
  CounterButton,
  CounterContainer,
  CounterData,
  Minus,
  Plus,
} from './Counter.styled';

export default function Counter({ fields, remove, append }) {
  return (
    <CounterContainer>
      <CounterButton
        type="button"
        onClick={() => remove(-1)}
        disabled={fields.length <= 1}
      >
        <Minus />
      </CounterButton>
      <CounterData>{fields.length}</CounterData>
      <CounterButton
        type="button"
        onClick={() => append({ id: '', measure: '' })}
        disabled={fields.length >= 30}
      >
        <Plus />
      </CounterButton>
    </CounterContainer>
  );
}
