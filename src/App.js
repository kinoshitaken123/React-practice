import Article from "./components/Article";

function App() {
  return(
   <div>
    <Article
     title={'新日本一わかりやすいReact'}
     content={'今日のトピックはpropsです'}
    /> 
    <Article
     title={'新日本一わかりやすいReact2'}
     content={'今日のトピックはpropsです'}
    /> 
    <Article
     title={'新日本一わかりやすいReact3'}
     content={'今日のトピックはpropsです'}
    /> 
   </div> 
  )
}

export default App;

// コンポーネントは再利用する事ができる
// 配列データをmap メソッドで処理することができる