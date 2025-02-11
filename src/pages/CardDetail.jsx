import { useParams } from "react-router-dom";
import cards from "../json/cards.json";

function CardDetail() {
    const { id } = useParams();
    const card = cards.filter((v) => v.id == id)[0];
    
    if (!card) {
        return <p>Card not found.</p>;
    }
      
    return (
        <div className="container">
            <h1 className="page-title">Card Detail</h1>
            <div className="flex flex-col lg:flex-row gap-6">
                <img
                    src={`https://violet-eligible-junglefowl-936.mypinata.cloud/ipfs/bafybeibpi7mn2bpbhlwu6ibesvnryvtrvyzwrkms6nk3mfbwhu4w32gaey/${card.id}.png`}
                    alt={`Product ${card.id}`}
                    className="lg:w-1/2 h-64 object-contain rounded shadow"
                />
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-white">{card.name}</h2>
                    <p className="text-md text-white">{card.description}</p>
                    <h2 className="mt-4 text-lg font-bold text-white">초기 능력치</h2>
                    <p className="text-md text-white">HP: {card.hp}</p>
                    <p className="text-md text-white">Attack: {card.attack}</p>
                    <p className="text-md text-white">Defence: {card.defence}</p>
                    <p className="text-md text-white">Origin Rate: {card.origin_rate}</p>
                    <p className="text-md text-white">Attribute: {card.attribute}</p>
                </div>
            </div>
        </div>
    );
}

export default CardDetail;