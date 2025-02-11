import { IoIosHeart } from "react-icons/io";
import { FaShieldAlt, FaLeaf, FaQuestionCircle  } from "react-icons/fa";
import { PiSwordFill } from "react-icons/pi";
import { ImFire } from "react-icons/im";
import { GiWaterSplash, GiHolyGrail, GiArcingBolt } from "react-icons/gi";
import { MdBlock } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { FaHandFist } from "react-icons/fa6";
import { FcBinoculars } from "react-icons/fc";
import {
    GiAlligatorClip,
    GiAbstract020,
    GiAfterburn,
    GiAgave,
    GiAlarmClock,    
} from "react-icons/gi";

function CardItem({card, dynamic}) {
    return (
        <div
            className="max-w-xs shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 relative bg-black"
        >
            <img
                className="object-fill absolute inset-0 w-full h-full z-0"
                src={'./assets/cover.png'}
                alt="Cover"
            />
            <div className="p-2">
                <div className={`p-2 animate-hologram
                    ${card.origin_rate === 1 
                        ? "tscard" 
                        : card.origin_rate === 2
                        ? "tgcard"
                        : card.origin_rate === 3
                        ? "tbcard"
                        : card.origin_rate === 4
                        ? "tpcard"
                        : card.origin_rate === 5
                        ? "tycard"
                        : ""
                    }`
                }>
                    {/* 타이틀 */}
                    <div className={`mx-1 p-2 flex flex-row justify-between items-center rounded shadow-md shadow-gray-400 relative z-10
                        ${card.origin_rate === 1 
                            ? "tscard" 
                            : card.origin_rate === 2
                            ? "tgcard"
                            : card.origin_rate === 3
                            ? "tbcard"
                            : card.origin_rate === 4
                            ? "tpcard"
                            : card.origin_rate === 5
                            ? "tycard"
                            : ""
                        }`}>
                        <div className="flex flex-row gap-2 items-center">
                            <div
                                className="w-8 h-8 rounded-full flex items-center justify-center"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(150, 150, 150, 1) 100%)',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
                                }}
                            >
                                <p className="text-black font-semibold text-bordered">
                                    {dynamic ? dynamic.lv : 1}
                                </p>
                            </div>
                            <h2 className="text-black font-bold text-bordered">{card.name}</h2>
                        </div>
                        {dynamic
                        ? <div>
                            <FcBinoculars className="w-6 h-6"/>
                        </div> 
                        : <FaQuestionCircle className="w-6 h-6 text-gray-500"/>
                        }
                        
                    </div>
                    {/* 이미지 */}
                    <div className={`m-2 pt-8 rounded shadow-md shadow-gray-400 relative z-10
                        ${card.origin_rate === 1 
                            ? "scard" 
                            : card.origin_rate === 2
                            ? "gcard"
                            : card.origin_rate === 3
                            ? "bcard"
                            : card.origin_rate === 4
                            ? "pcard"
                            : card.origin_rate === 5
                            ? "ycard"
                            : ""
                        }`}>
                            <div className="absolute left-0 top-0 flex flex-col w-full p-1">
                            <div className="h-4 flex flex-row items-center gap-2">
                                <IoIosHeart className="text-red-500"/>
                                <div
                                    className="h-2 bg-red-500"
                                    style={{ width: `${card.hp/2000*100}%` }}
                                />
                            </div>
                            <div className="h-4 flex flex-row items-center gap-2">
                                <FaShieldAlt className="text-green-600"/>
                                <div
                                    className="h-2 bg-green-600"
                                    style={{ width: `${card.defence/2000*100}%` }}
                                />
                            </div>
                            <div className="h-4 flex flex-row items-center gap-2">
                                <PiSwordFill className="text-blue-600"/>
                                <div
                                    className="h-2 bg-blue-600"
                                    style={{ width: `${card.attack/2000*100}%` }}
                                />
                            </div>
                        </div>
                        <img
                            className="w-6 absolute right-1 top-1"
                            src={'./assets/fairy.png'}
                            alt={card.name}
                        />
                        <div
                            className="absolute right-1 bottom-1 w-8 h-8 rounded-full flex items-center justify-center"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(150, 150, 150, 1) 100%)',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
                            }}
                        >
                            {card.attribute === "fire" 
                            ? <ImFire className="text-red-600 w-6 h-6" />
                            : card.attribute === "water" 
                            ? <GiWaterSplash className="text-blue-600 w-6 h-6" />
                            : card.attribute === "earth" 
                            ? <FaLeaf className="text-green-600 w-6 h-6" />
                            : card.attribute === "light" 
                            ? <GiHolyGrail className="text-yellow-600 w-6 h-6" />
                            : <GiArcingBolt className="text-purple-600 w-6 h-6" />
                            }
                            
                        </div>
                        <img
                            className="w-full h-48 object-contain"
                            src={`https://violet-eligible-junglefowl-936.mypinata.cloud/ipfs/bafybeibpi7mn2bpbhlwu6ibesvnryvtrvyzwrkms6nk3mfbwhu4w32gaey/${card.id}.png`}
                            alt={card.name}
                        />
                    </div>        
                    {/* 스킬창 */}            
                    <div className="p-2 bg-orange-300">
                        <div
                            className={`p-2 shadow-md shadow-gray-400 relative z-10
                            ${card.origin_rate === 1 
                                ? "scard" 
                                : card.origin_rate === 2
                                ? "gcard"
                                : card.origin_rate === 3
                                ? "bcard"
                                : card.origin_rate === 4
                                ? "pcard"
                                : card.origin_rate === 5
                                ? "ycard"
                                : ""
                            }`
                        }>
                            <div className="mb-2">
                                <p className="text-sm font-bold text-bordered">파워 스매시</p>
                                <p className="text-xs">공격력의 130%(<span className="text-blue-500 font-bold">+{(1.3*card.attack).toFixed(0)}</span>) 만큼의 데미지를 줍니다</p>
                            </div>
                            <div className="flex flex-row justify-evenly">
                                <div
                                    className="right-1 bottom-1 w-7 h-7 rounded-full flex items-center justify-center"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(120, 50, 30, 0.3) 0%, rgba(120, 50, 30, 1) 100%)',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
                                    }}
                                >
                                    <FaHandFist className="w-5 h-5 text-gray-800" />
                                </div>
                                {Array(card.origin_rate).fill().map((v, i) => {
                                    const skill = dynamic?.skill[i]; 
                                    if(skill) {
                                        return (
                                            <div key={i} 
                                                className="right-1 bottom-1 w-7 h-7 rounded-full flex items-center justify-center"
                                                style={{
                                                    background: 'linear-gradient(135deg, rgba(255, 20, 50, 1) 0%, rgba(120, 185, 120, 1) 50%, rgba(123, 73, 164, 1) 100%)',
                                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
                                                }}
                                            >
                                                {skill === 1
                                                ? <GiAbstract020 className="w-5 h-5 text-purple-800" /> 
                                                : skill === 2
                                                ? <GiAfterburn className="w-5 h-5 text-orange-500" /> 
                                                : skill === 3
                                                ? <GiAgave className="w-5 h-5 text-red-600" /> 
                                                : skill === 4
                                                ? <GiAlarmClock className="w-5 h-5 text-blue-600" /> 
                                                : skill === 5
                                                ? <GiAlligatorClip className="w-5 h-5 text-purple-700" /> 
                                                : <FaHandFist className="w-5 h-5 text-white" /> 
                                                }
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div key={i} 
                                                className="right-1 bottom-1 w-7 h-7 rounded-full flex items-center justify-center"
                                                style={{
                                                    background: 'linear-gradient(135deg, rgba(255, 20, 50, 1) 0%, rgba(120, 185, 120, 1) 50%, rgba(123, 73, 164, 1) 100%)',
                                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
                                                }}
                                            >
                                                <AiOutlineLock className="w-6 h-6 text-white" />
                                            </div>
                                        );
                                    }
                                })}
                                {Array(5-card.origin_rate).fill().map((v, i) => (
                                    <div key={i} 
                                        className="right-1 bottom-1 w-7 h-7 rounded-full flex items-center justify-center"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(250, 250, 250, 0.3) 0%, rgba(120, 120, 120, 1) 100%)',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
                                        }}
                                    >
                                        <MdBlock className="w-6 h-6 text-red-950" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    );
}

export default CardItem;