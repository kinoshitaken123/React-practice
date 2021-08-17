// 名前付きimport
// ・１ファイルから複数モジュールを読み込む
// ・エントリポイントから複数コンポーネントを読み込む
import { useState } from "react";
import {Content, Title} from "./index";

// propsでデータを受け渡し
// ・子コンポーネントの引数にpropsを指定する
// ・親から子にデータを渡す

const Article = (props) => {
  const [isPublished, setISPublished] = useState(false)
  console.log(isPublished)
  return (
    <div>
      <Title title={props.title} />
      <Content content={props.content} />
      <button onClick= {() => setISPublished(true)}>公開</button>
    </div>
  );
};

export default Article;

