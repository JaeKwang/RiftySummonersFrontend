import CardItem from "../components/CardItem";
import cards from "../json/cards.json";
import goods from "../json/goods.json";

function Marketplace() {
  
  return (
    <div className="container">
      <h1 className="page-title">Market Place</h1>
      <div className="flex flex-col gap-6">
        {
          goods.map((v, i) => {
            const card = cards.filter((v2) => v2.id===v.card_id)[0]
            console.log(v)
            return <div key={i} className="flex flex-row items-center gap-8">
              <CardItem card={card} />
              <div className="flex flex-col">
                <h1 className="text-white">Seller: {v.seller}</h1>
                <h1 className="text-white">Price: {v.price} ETH</h1>
                <h1 className="text-white">Skill: {v.skill}</h1>
                <h1 className="text-white">Rate: {v.rate}</h1>
              </div>
            </div>;
          })
        }      
      </div>
    </div>
  );
}
  
export default Marketplace;