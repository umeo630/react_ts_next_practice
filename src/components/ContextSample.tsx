import React from "react";

// Titleを渡すためのContextを作成
const TitleContext = React.createContext('');

// Consumerを使ってContextの値を参照
const Title = () => {
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

// HeaderからTitleへは何も渡さない
const Header = () => {
  return (
    <div>
      <Title></Title>
    </div>
  )
}

// Providerを使いContextに値を設定
// Provider以下のコンポーネントから値を参照できる
const Page = () => {
  const title = 'React'

  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page;
