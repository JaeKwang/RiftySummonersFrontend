import CardDetail from "./CardDetail";
import CardItem from "../components/CardItem";
import cards from "../json/cards.json";
import { Link } from "react-router-dom";

function CardList() {
  
  const clickEvent = (i) => {
    navigation.navigate(`cards/${i}`);
  }

  return (
    <div className="container">
      <h1 className="page-title">Card list</h1>
      <div className="flex flex-row w-full items-center justify-center gap-4 mb-8">
        <input className="rounded border border-white text-white text-center"/>
        <button className="bg-blue-300 rounded p-1 w-auto">검색</button>
        <div className="flex flex-col">
          <button className="">sort...</button>
          <button className="">filter...</button>
        </div>
      </div>
      
      <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {cards.map((v, i) => {
          return <div key={i}>
            <Link to={`/cards/${v.id}`}>
              <CardItem card={v} />
            </Link>
          </div>
        })}
      </div>
    </div>
  );
}
  
export default CardList;