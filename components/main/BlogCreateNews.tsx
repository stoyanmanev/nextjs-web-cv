import Axios from "axios";
import { FormEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { News, useCreateNewsMutation, User } from "../../generated/graphql";

interface Props {
  user: User;
  setBlog: (type: News) => void
}

const BlogCreateNews: React.FC<Props> = ({ user, setBlog }) => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [keywords, setKeywords] = useState<string>("");
  const [file, setFile] = useState<any>("");

  const isContentPreset =
    title !== "" && category !== "" && description !== "" && file !== "";

  const { mutate } = useCreateNewsMutation({
    onSuccess: (data) => {

      toast.info(`The news was created successfully`);
      // const userData: any = data?.editUser; // QuickFix: type any to be type User
      console.log(data)
      // setBlog()
    },
    onError: (err: any) => {
      const errorMsg = String(err).split(":")[1];
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
    const keywordsToArray = keywords.split(",").map((word) => word.trim());
    if (!isContentPreset) return false;
    const isUploaded = await uploadImage(); // isUploaded if is success return url path to image
    if (isUploaded) {
      await mutate({data: {title, category, description, image: isUploaded, keywords: keywordsToArray}});
    } else {
      toast.error(`Image uploaded failed`);
    }
    console.log(title, category, description, file, keywordsToArray);
  };

  return (
    <div className="blog-form-container">
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
            type="text"
            value={description}
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
