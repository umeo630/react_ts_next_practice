import { memo, useState } from "react";

type FizzProps = {
  isFizz: boolean;
}

// 通常の関数コンポーネント
const Fizz = (props: FizzProps) => {
  const { isFizz } = props;
  console.log(`Fizzが再描画されました, isFizz=${isFizz}`);
  return <span>{ isFizz ? 'Fizz' : '' }</span>
}

type BuzzProps = {
  isBuzz: boolean;
}

// メモ化した関数コンポーネント
// 親コンポーネントが再描画されてもisBuzzが変化しない限りは再描画されない
const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz } = props;
  console.log(`Buzzが再描画されました, isBuzz=${isBuzz}`);
  return <span>{ isBuzz ? 'Buzz' : '' }</span>
})

export const Parent = () => {
  const [count, setCount] = useState(1);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;

  console.log(`Parentが再描画されました, count=${count}`);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>{ `現在のカウント: ${count}` }</p>
      <p>
        <Fizz isFizz={isFizz}></Fizz>
        <Buzz isBuzz={isBuzz}></Buzz>
      </p>
    </div>
  )
}
