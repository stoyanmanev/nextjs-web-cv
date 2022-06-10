import Axios from "axios";
import { FormEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { News, useCreateNewsMutation, User } from "../../generated/graphql";
import Loader from "../LoaderContainer";

interface Props {
  user: User;
  setBlog: (type: News) => void;
  refetch: () => void;
  setIsCreateNew: (type: Boolean) => void;
}

const BlogCreateNews: React.FC<Props> = ({ user, setBlog, refetch, setIsCreateNew }) => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [keywords, setKeywords] = useState<string>("");
  const [file, setFile] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(false)

  const isContentPreset =
    title !== "" && category !== "" && description !== "" && file !== "";

  const { mutate } = useCreateNewsMutation({
    onSuccess: () => {
      refetch();
      setLoading(false)
      toast.info(`The news was created successfully`);
    },
    onError: (err: any) => {
      const errorMsg = String(err).split(":")[1];
      setLoading(false)
      toast.error(`${errorMsg}`);
    },
  });

  const changeFileHandler = (e: any) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", "u0wnuz7v");

    return Axios.post(
      "https://api.cloudinary.com/v1_1/nextjs-web-cv/image/upload",
      fd
    )
      .then((res) => {
        const uploadUrl = res.data.secure_url;
        return uploadUrl;
      })
      .catch(() => {
        return false;
      });
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const keywordsToArray = keywords.split(",").filter((word) => word.trim() !== "").map(word => word.trim());
    if (!isContentPreset) return false;
    setLoading(true);
    const isUploaded = await uploadImage(); // isUploaded if is success return url path to image
    if (isUploaded) {
      await mutate({
        data: {
          title,
          category,
          description,
          image: isUploaded,
          keywords: keywordsToArray,
        },
      });
    } else {
      setLoading(false);
      toast.error(`Image uploaded failed`);
    }
  };

  if(loading === true){
    return(
      <Loader />
    )
  }

  return (
    <div className="blog-form-container">
      <div className="return-btn">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => setIsCreateNew(false)}
        />
      </div>
      <Form onSubmit={(e) => submitHandler(e)} className="blog-form">
        <Form.Group>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Title"
          />
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            placeholder="Category"
          />
          <Form.Control
            as="textarea"
            value={description}
            rows={5}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Description"
          />
          <Form.Control
            type="file"
            onChange={(e) => {
              changeFileHandler(e);
            }}
            placeholder="Submit File"
          />
          <Form.Control
            type="keywords"
            value={keywords}
            onChange={(e) => {
              setKeywords(e.target.value);
            }}
            placeholder="Please use ',' to separate keywords"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className={`${!isContentPreset ? "btn-disabled" : ""}`}
        >
          Create News
        </Button>
      </Form>
    </div>
  );
};

export default BlogCreateNews;

// category: string;
// title: string;
// image: string;
// description: string;
// keywords?: string[];
