import { useEffect, useState } from "react";

// タイマーが呼び出される周期を1秒にする
const UPDATE_CYCLE = 1000

// localstorageで使用するキー
const KEY_LOCALE = 'KEY_LOCALE';

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
  CH = 'zh-cn',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US
    case Locale.JP:
      return Locale.JP
    case Locale.CH:
      return Locale.CH
    default:
      return Locale.US
  }
}

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.US)

  // タイマーをセットするための副作用
  useEffect(() => {
    // タイマーのセット
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    // アンマウント時にタイマーの解除をする
    return () => {
      clearInterval(timer)
    }
    // 初期描画時のみ実行する
  }, [])

  // localstrageから値を読み込むための副作用
  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  }, [])

  // localeが変化したときに、localstorageに値を保存するための副作用
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale)
    // localeが変化するたびに実行するようにする
  }, [locale])

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => {
            setLocale(getLocaleFromString(e.target.value));
          }}
        >
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
          <option value="zh-cn">zh-cn</option>
        </select>
      </p>
    </div>
  );
}
