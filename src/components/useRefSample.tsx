import React, { useRef, useState } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const UPLOAD_DELAY = 5000;

export const ImageUploader = () => {
  // 隠されたinput要素にアクセスするためのref
  const inputImageRef = useRef<HTMLInputElement | null>(null)
  // 選択されたファイルデータを保持するためのref
  const fileRef = useRef<File | null>(null)
  const [message, setMessage] = useState<string | null>('')

  const onClickText = () => {
    if (inputImageRef.current !== null) {
      // inputのDOMにアクセスしてクリックイベントを発火する
      inputImageRef.current.click();
    }
  }

  const onChangeImage = (e:React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files !== null && files.length > 0) {
      // fileRef.currentに値を保存する
      fileRef.current = files[0]
    }
  }

  const onClickUpload = async () => {
    if (fileRef.current !== null) {
      // 通常はここでAPIを呼んでファイルをサーバーに保存する
      // 擬似的に一定時間待つ
      await sleep(UPLOAD_DELAY)
      // アップロード成功メッセージ
      setMessage(`${fileRef.current.name} has been succesfully uploaded`)
    }
  }

    return (
      <div>
        <p style={{ textDecoration: 'underliine' }} onClick={onClickText}>画像をアップロード</p>
        <input ref={inputImageRef} type="file" accept="image/*" onChange={onChangeImage} style={{ visibility: 'hidden' }} />
        <br />
        <button onClick={onClickUpload}>アップロードする</button>
        {message !== null && <p>{message}</p>}
      </div>
    )
}
