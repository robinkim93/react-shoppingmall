import { productDataType } from "../App";
import { useNavigate } from "react-router-dom";

interface PropsType {
  productsData: productDataType;
}

export const Card = (props: PropsType) => {
  const { productsData } = props;
  const productId = productsData.id;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/detail/${productId}`);
      }}
    >
      <img src={productsData.image} alt="" />
      <h4>{productsData.title}</h4>
      <p>{productsData.price}</p>
    </div>
  );
};
