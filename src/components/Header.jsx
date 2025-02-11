import { Link } from "react-router-dom";
import {ethers} from "ethers"
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/slices/userSlice";

function Header() {
    const dispatch = useDispatch();
    const { isLoggedIn, userInfo } = useSelector((state) => state.user);

    const LoginMetamask = async () => {
        try{
            if(!window.ethereum) return;
    
            var meta = window.ethereum;
            if(window.ethereum.providerMap) {
                for (let [key, value] of window.ethereum.providerMap.entries()) {
                    if (key === "MetaMask") {
                        meta = value;
                        break;
                    }
                }
            }
    
            const provider = new ethers.BrowserProvider(meta);
            const signer = await provider.getSigner();
            dispatch(login(signer.address))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <header
            className="flex items-center justify-between bg-gray-800 text-white shadow-md h-20 p-6"
        >
            <div>
                Logo
            </div>
            <nav className="flex gap-4 items-center">
                <Link to="/" className="hover:underline">
                    Home
                </Link>
                <Link to="/marketplace" className="hover:underline">
                    Marketplace
                </Link>
                <Link to="/cards" className="hover:underline">
                    Cards
                </Link>
                <a href="/game" className="hover:underline">
                    Game
                </a>                
                <Link to="/favorite" className="hover:underline">
                    Favorite
                </Link>
                {isLoggedIn
                ? <div className="flex flex-row items-center gap-2">
                    <p className="text-sm">
                        {userInfo.substring(0, 7)}...{userInfo.substring(userInfo.length-5, userInfo.length)}
                    </p>
                    <button className="btn-style" onClick={() => dispatch(logout())}>
                        Logout
                    </button>
                </div>
                : <button className="btn-style" onClick={LoginMetamask}>
                    🦊 메다마스크
                </button>
                }
            </nav>           
        </header>
    );
}

export default Header;
