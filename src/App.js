import {Article, TextInput,Counter} from "./components";
import ToggleButton from "./components/ToggleButton";

function App() {
  return(
   <div>
    <ToggleButton />
    <Counter />
    {/* <Article
     title={'新日本一わかりやすいReact2'}
     content={'今日のトピックはpropsです'}
    /> 
    <Article
     title={'新日本一わかりやすいReact3'}
     content={'今日のトピックはpropsです'}
    />  */}
   </div> 
  );
}

export default App;

// コンポーネントは再利用する事ができる
// 配列データをmap メソッドで処理することができる