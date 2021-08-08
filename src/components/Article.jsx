// Article.jsx(export元)
import {Content, Title}from "./index";

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(initialStatefalse)
    const publishArticle = () =>{
        StyleSheetList(valuetrue)
    }
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
};

export default Article;