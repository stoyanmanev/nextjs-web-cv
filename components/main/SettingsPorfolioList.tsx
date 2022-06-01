/* eslint-disable react-hooks/rules-of-hooks */
import {
  Portfolio,
  useDeletePortfolioMutation,
  usePortfoliosQuery,
  User,
} from "../../generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ModalPortfolio from "../ModalPortfolio";

interface Props {
  user: User;
}

const SettingsPortfolioList: React.FC<Props> = ({ user }) => {
  const [userPortfolioList, setUserPortfolioList] = useState<any>(); // QuickFix: any will be type Portfolio[]
  const [showModal, setShowModal] = useState<Boolean>(false);

  const { isLoading, isError, data, error, refetch } = usePortfoliosQuery(
    {},
    {
      refetchOnWindowFocus: false,
    }
  );
  const { mutate } = useDeletePortfolioMutation({
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
    const portfioFilteredList = data?.portfolios.filter(
      ({ createdBy }) => createdBy === user._id
    );
    setUserPortfolioList(portfioFilteredList);
  }, [data]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    toast.error("We were unable to load your portfolio data..");
    return <span>Something went wrong</span>;
  }

  const handleDelete = (id: string) => {
    mutate({ id });
  };

  const handleOpenModalItem = () =>{
    setShowModal(true);
  }

  return (
    <div className="list-items-container">
      {userPortfolioList?.length > 0 &&
        userPortfolioList.map((item: Portfolio, i: number) => (
          <div key={i} className="list-item-box">
            <img
              src={`${item.image}`}
              height={200}
              width={192}
              alt={item.name}
            />
            <div className="portfolio-item">
              <span className="title">{item.name}</span>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDelete(item._id)}
              />
            </div>
          </div>
        ))}
        <div className="btn-container">
            <Button onClick={() => handleOpenModalItem()} title="Add an item to your portfolio">
                <FontAwesomeIcon icon={faPlus} />
            </Button>
        </div>
        <ModalPortfolio setShowModal={setShowModal} isModalOpen={showModal} refetch={refetch}/>
    </div>
  );
};

export default SettingsPortfolioList;
