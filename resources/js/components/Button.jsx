import React from "react";

function Button({ text = "button", clickListener }) {
    return (
        <div
            className="text-[12px] text-yellow-50 bg-red py-2 px-3 rounded-xl cursor-pointer
             hover:bg-rose-500 hover:text-red mb-2"
             onClick={clickListener}
        >
            {text}
        </div>
    );
}

export default Button;
