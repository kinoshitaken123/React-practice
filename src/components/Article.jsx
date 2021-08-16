import {Content, Title} from "./index";

const Article = (props) => {
  return (
    <div>
      <Title title={props.title} />
      <Content content={props.content} />
    </div>
  );
};

export default Article;

// propsでデータを受け渡し
// ・子コンポーネントの引数にpropsを指定する
// ・親から子にデータを渡す