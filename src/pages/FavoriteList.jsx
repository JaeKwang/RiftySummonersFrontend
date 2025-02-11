import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa";
import FavoriteItem from "../components/FavoriteItem";
import cards from "../json/cards.json";

function FavoriteList() {
    const { items, totalAmount } = useSelector((state) => state.favorite);
    
    return (
        <div className="container">
            <h1 className="page-title">FavoriteList</h1>
            <table className="w-full">
                <thead>
            <tr className="border-b border-white">
                <th className="text-left p-4 text-white">
                    <input type="checkbox" />
                </th>
                <th className="text-left p-4 text-white">NFT</th>
                <th className="text-left p-4 text-white">Seller</th>
                <th className="text-left p-4 text-white">Price</th>
            </tr>
            </thead>
            <tbody>
                {items.map((v, i) => <FavoriteItem card={cards.find((v2)=>v2.id ===v.card_id)} dynamic={v} key={i}/>)}
            </tbody>
            </table>

            <div className="mt-4 flex justify-between">
                <div className="flex flex-row items-center">
                    <FaEthereum className="text-2xl text-gray-300"/>
                    <h2 className="text-xl font-bold text-white">{totalAmount.toFixed(2)} ETH</h2>
                </div>
                <Link
                    to="/checkout"
                    className="px-6 py-2 bg-green-500 text-white rounded"
                >
                    Checkout
                </Link>
            </div>
        </div>
    );
}

export default FavoriteList;