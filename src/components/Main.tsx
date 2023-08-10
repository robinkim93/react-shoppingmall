import { productDataType } from "../App";
import { Card } from "./Card";

export interface PropsType {
  productsData: productDataType[];
}

export const Main = (props: PropsType) => {
  const { productsData } = props;
  return (
    <div>
      <div className="bg-main w-screen h-72 bg-cover bg-left"></div>

      <div className="grid grid-cols-3 gap-8">
        {productsData.map((product: productDataType, index) => {
          return <Card productsData={product} key={index} />;
        })}
      </div>
    </div>
  );
};
