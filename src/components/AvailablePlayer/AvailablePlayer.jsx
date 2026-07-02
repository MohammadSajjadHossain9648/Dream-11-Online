import { CircleUserRound, Flag } from 'lucide-react';
import React, { useState } from 'react';

const AvailablePlayer = ({ player, handleToChoosePlayer }) => {
    const [chooseBtn, setChooseBtn] = useState(false);

    const handleButton = () => {
        setChooseBtn(!chooseBtn);
        handleToChoosePlayer(player);
    }

    return (
        <div className="p-5 border border-shade_black_hr_color rounded-2xl">
            <figure className="sm:h-72 md:h-52">
                <img className="w-full h-full rounded-2xl" src={player.img} alt="cricket player image" />
            </figure>

            <div className="">
                <h1 className="font-semibold flex items-center mt-5 mb-3">
                    <CircleUserRound></CircleUserRound>{player.name}
                </h1>
                <div className="flex justify-between">
                    <p className="text-sm opacity-50 flex items-center">
                        <Flag></Flag>{player.country}
                    </p>
                    <div className="text-xs bg-shade_black_bg_color rounded-md px-4 py-3">{player.role}</div>
                </div>

                <div className="my-4 border border-shade_black_hr_color"></div>

                <h2 className="text-sm font-bold">Rating</h2>
                <div className="mt-5 mb-2 flex justify-between items-center">
                    <p className="text-sm font-semibold">{player.batting_type}</p>
                    <p className="text-sm text-shade_black_color_1">{player.bowling_type}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold">Price: ${player.bidding_price}</p>
                    <button onClick={handleButton} disabled={chooseBtn} className={`btn text-xs font-normal bg-white_color rounded-md ${chooseBtn ? 'bg-green-800 text-black' : ''}`}>{chooseBtn ? 'Selected' : 'Choose Player'}</button>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayer;