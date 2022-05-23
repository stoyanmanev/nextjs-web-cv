import { Button } from "react-bootstrap";

interface Props{
    setIsCreateNews: (type: Boolean) => void
}

const BlogItemCreate: React.FC<Props> = ({setIsCreateNews}) =>{

    return(
        <div className="create-btn-container">
            <Button onClick={() => setIsCreateNews(true)}>Add News to Your Blog</Button>
        </div>
    )

}

export default BlogItemCreate;