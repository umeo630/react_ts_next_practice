import { useCallback, useState } from "react"
import { Button } from "./PresentationalComponent"

const usePopUp = () => {
  const cb = useCallback((text: string) => {
    prompt(text)
  }, [])

  return cb
}

type CountButtonProps = {
  label: string
  maximum: number
}

export const CountButton = (props: CountButtonProps) => {
  const { label, maximum } = props

  // アラート表示のためのフック
  const displayPopup = usePopUp()

  // カウントを保持するための状態を定義
  const [count, setCount] = useState(0)

  // ボタンが押された時の挙動
  const onClick = useCallback(() => {
    // カウントを更新する
    const newCount = count + 1
    setCount(newCount)

    if (newCount >= maximum) {
      displayPopup(`You've clicked ${newCount} times`)
    }
  }, [count, maximum])

   // 状態を元に表示に必要なデータを求める
  const disabled = count >= maximum
  const text = disabled ? 'Can\'t click any more' : `You've clicked ${count} times`

  // Presentational Componentを返す
  return (
    <Button disabled={disabled} onClick={onClick} label={label} text={text}></Button>
  )
}
