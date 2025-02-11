import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CheckOut() {
    const { isLoggedIn } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) return;
        navigate("/login", { state: { from: "/checkout" } });
    }, []);

    return (
        <div className="container">
            <h1 className="page-title">Checkout</h1>
            <form className="grid grid-cols-2 gap-4">
                <div>
                <label className="block mb-2 text-white" htmlFor="name">
                    Name
                </label>
                <input
                    className="w-full border border-white text-white px-4 py-2 rounded"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                />
                </div>
                <div>
                <label className="block mb-2 text-white" htmlFor="address">
                    Address
                </label>
                <input
                    className="w-full border border-white text-white px-4 py-2 rounded"
                    type="text"
                    id="address"
                    placeholder="Enter your address"
                />
                </div>
                <div className="col-span-2">
                <button
                    className="w-full px-6 py-2 bg-blue-500 text-white rounded"
                    type="submit"
                >
                    Confirm Purchase
                </button>
                </div>
            </form>
        </div>
    );
}

export default CheckOut;