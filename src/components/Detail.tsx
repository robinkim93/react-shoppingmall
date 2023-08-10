import React from "react";
import { useParams } from "react-router-dom";
import { productDataType } from "../App";

interface PropsType {
  productsData: productDataType[];
}

export const Detail = (props: PropsType) => {
  const { id } = useParams();
  const { productsData } = props;
  const detailData: productDataType | undefined = productsData.find((item) => {
    return item.id === Number(id);
  });
  return (
    <div>
      {detailData === undefined ? (
        <div>찾는 상품이 없습니다.</div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={detailData.image} width="100%" alt="" />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{detailData.title}</h4>
              <p>{detailData.content}</p>
              <p>{detailData.price}원</p>
              <button>주문하기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
