import { useDispatch, useSelector } from "react-redux";
import CardItem from "../components/CardItem";
import cards from "../json/cards.json";
import goods from "../json/goods.json";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { addFavorite, removeFavorite } from "../store/slices/favoriteSlice";
import { Link } from "react-router-dom";
import { toast

 } from "react-toastify";
function Marketplace() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.favorite);
  
  const handleAddFavorite = (e, v) => {
    dispatch(addFavorite(v));
    toast.success(`NFT-${v.id} has been added to your favorites!`);
  }
  
  const handleRemoveFavorite = (e, v) => {
    dispatch(removeFavorite(v))
    toast.success(`NFT-${v.id} has been deleted to your favorites!`);
  }

  return (
    <div className="container">
      <h1 className="page-title">Market Place</h1>
      <div className="flex flex-col gap-6">
        {
          goods.map((v, i) => {
            const card = cards.filter((v2) => v2.id===v.card_id)[0]
            
            return <div key={i} className="flex flex-row items-center gap-8 border ">
                <Link to="/checkout" >
                  <CardItem card={card} dynamic={v} />
                </Link>
                <div className="flex flex-col relative">
                  <div className="flex flex-row items-center gap-4">
                    <h1 className="text-white text-2xl">NFT-{v.id}</h1>
                    {items.findIndex((item) => item.id === v.id) === -1
                    ? <div onClick={(e) => handleAddFavorite(e, v)}>
                      <FaRegHeart className="text-red-500" />                  
                    </div>
                    : <div onClick={(e) => handleRemoveFavorite(e, v)}>
                      <FaHeart className="text-red-500" />                  
                    </div>
                    }
                  </div>
                  <h1 className="text-white">Seller: {v.seller}</h1>
                  <h1 className="text-white">Price: {v.price} ETH</h1>
                  <h1 className="text-white">Skill: {v.skill}</h1>
                  <h1 className="text-white">Rate: {v.rate}</h1>
                </div>
              </div>
          })
        }      
      </div>
    </div>
  );
}
  
export default Marketplace;