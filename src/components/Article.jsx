// 名前付きimport
// ・１ファイルから複数モジュールを読み込む
// ・エントリポイントから複数コンポーネントを読み込む
import { useState } from "react";
import {Content, Title, PublishButton} from "./index";

// propsでデータを受け渡し
// ・子コンポーネントの引数にpropsを指定する
// ・親から子にデータを渡す

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false)
  const publishArticle =() => {
    setIsPublished(true)
  }

  return (
    <div>
      <Title title={props.title} />
      <Content content={props.content} />
      <Publishbutton isPublished= {isPublished} onClick ={publishArticle} />
    </div>
  );
};

export default Article;
