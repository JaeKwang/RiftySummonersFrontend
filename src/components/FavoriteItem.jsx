
function FavoriteItem({card, dynamic}) {
    return (
        <tr className="border-b border-white">
            <td className="p-4 text-white">
                <input type="checkbox" />
            </td>
            <td className="p-4 text-white flex flex-row gap-1">
                <p>[{dynamic.id}]</p>
                <p>{card.name}</p>
                <p>({dynamic.lv}lv)</p>
                <p>★{dynamic.rate}</p>
            </td>
            <td className="p-4 text-white">{dynamic.seller}</td>
            <td className="p-4 text-white">{dynamic.price} ETH</td>
        </tr>
    );
}

export default FavoriteItem;