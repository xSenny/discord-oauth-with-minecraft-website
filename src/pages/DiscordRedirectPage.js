import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";

export const DiscordRedirectPage = () => {

    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();

    const code = query.get('code');

    const copyText = (e) => {
        e.preventDefault();
        const text = e.target.innerText;
        navigator.clipboard.writeText(text);
        alert("The command was copied in your clipboard, now use in our minecraft server.")
    }

    return (
        <div className={"bg-background justify-center gap-10 items-center w-screen h-[100vh] flex flex-col"}>
            <span className={"text-center text-gray-400 text-xs tablet:text-xl laptop:text-2xl"}>You are now logged with your discord account, to continue, <br />
            use this command in minecraft. Click to copy.</span>
            <div className={"w-10/12 h-[5rem] bg-[#201179]/40 border-[3px] border-[#C32BB3] text-gray-300 rounded-3xl flex justify-center items-center underline"}>
                <span onClick={e => copyText(e)} className={"hover:text-[3.1vw] cursor-pointer text-[3vw] tablet:text-[2vw] tablet:hover:text-[2.1vw] transition-all duration-300 ease-in"}>/link confirm {code}</span>
            </div>
            <img className={"w-[25vw]"} src={Logo} alt={"sau"}/>
        </div>
    );

}