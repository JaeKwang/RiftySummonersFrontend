import { Link } from "react-router-dom";

function FavoriteList() {

    return (
        <div className="container">
            <h1 className="page-title">FavoriteList</h1>
            <table className="w-full">
                <thead>
            <tr className="border-b border-white">
                <th className="text-left p-4 text-white">Product</th>
                <th className="text-left p-4 text-white">Quantity</th>
                <th className="text-left p-4 text-white">Price</th>
                <th className="text-left p-4 text-white">Total</th>
            </tr>
            </thead>
            <tbody>
            <tr className="border-b border-white">
                <td className="p-4 text-white">Sample Product</td>
                <td className="p-4">
                <button className="px-2 py-1 border border-white rounded text-white">-</button>
                <span className="px-2 text-white">1</span>
                <button className="px-2 py-1 border border-white rounded text-white">+</button>
                </td>
                <td className="p-4 text-white">$ 100</td>
                <td className="p-4 text-white">$ 100</td>
            </tr>
            </tbody>
            </table>

            <div className="mt-4 flex justify-between">
                <h2 className="text-xl font-bold text-white">Total: $100</h2>
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