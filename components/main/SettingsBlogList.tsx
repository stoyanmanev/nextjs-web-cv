import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  News,
  useDeleteNewsMutation,
  useNewsesQuery,
  User,
} from "../../generated/graphql";
import Loader from "../LoaderContainer";

interface Props {
  user: User;
}

const SettingsBlogList: React.FC<Props> = ({ user }) => {
  const [blogResults, setBlogResults] = useState<any>();

  const { isLoading, isError, data, refetch } = useNewsesQuery(
    {},
    {
      refetchOnWindowFocus: false,
    }
  );
  const { mutate } = useDeleteNewsMutation({
    onSuccess: () => {
      refetch();
      toast.success(
        "You have successfully deleted an item from your portfolio"
      );
    },
    onError: () => {
      toast.error("Deletion failed");
    },
  });

  useEffect(() => {
    if (data?.newses) {
      const filtered = data.newses
        .filter((news) => news.createdBy === user._id)
        .reverse();
      setBlogResults(filtered);
    }
  }, [data]);

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <>Something went wrong</>;
  }

  const handleDelete = async (id: string) => {
    await mutate({ id });
  };

  return (
    <div className="list-items-container">
      {blogResults?.length > 0 &&
        blogResults.map((item: News) => (
          <div key={item._id} className="list-item-box">
            <img
              src={`${item.image}`}
              height={200}
              width={192}
              alt={item.name}
            />
            <div className="portfolio-item">
              <span className="title">{item.title}</span>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDelete(item._id)}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default SettingsBlogList;
