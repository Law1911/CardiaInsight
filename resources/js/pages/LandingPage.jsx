import React from "react";
import lobby from "../assets/lobby.png";

function LandingPage() {
    return (
        // Container yang akan menyesuaikan ukuran berdasarkan gambar di dalamnya
        <div className="flex justify-center items-center overflow-hidden">
            <div className="">
                <img className="" src={lobby} alt="Lobby" />
            </div>
        </div>
    );
}

export default LandingPage;
