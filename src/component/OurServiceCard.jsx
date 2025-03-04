import React from "react";
import BookButton from "./Button";

export default function OurServiceCard({ title, image }) {
    return(
        <div className="w-[395px] h-[150px] bg-[#F5F5F5] rounded-[20px] flex space-x-[25px] p-[20px] items-center">
            <div>
                <img src={image} alt="Service" className="h-[100px] " />
            </div>
            <div className="space-y-[15px]">
                <h1 className="font-[600] text-[20px]">{title}</h1>
                <BookButton text={"Book now"} textSize={"8px"} w={"100px"} h={"30px"}/>
            </div>
        </div>
    )
}