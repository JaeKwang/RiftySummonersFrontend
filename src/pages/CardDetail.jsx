import { useParams } from "react-router-dom";
import cards from "../json/cards.json";

function CardDetail() {
    const { id } = useParams();
    const card = cards.filter((v) => v.id == id)[0];

    console.log(card)
    return (
        <div className="container">
            <h1 className="page-title">Card Detail</h1>
            <div className="flex flex-col lg:flex-row gap-6">
                <img
                    src={`https://violet-eligible-junglefowl-936.mypinata.cloud/ipfs/bafybeibpi7mn2bpbhlwu6ibesvnryvtrvyzwrkms6nk3mfbwhu4w32gaey/${card.id}.png`}
                    alt={`Product ${card.id}`}
                    className="w-full lg:w-1/2 h-64 object-cover rounded shadow"
                />
                <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">{card.name}</h2>
                <p className="text-gray-700">
                    This is a detailed description of product {id}.
                </p>
                <p className="text-lg font-bold text-blue-500">$ 100</p>
                <div className="flex gap-4">
                    <button className="px-4 py-2 bg-green-500 text-white rounded">
                    Buy Now
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">
                    Add to Cart
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetail;