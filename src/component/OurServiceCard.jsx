import React from "react";
import BookButton from "./Button";
import { useNavigate } from "react-router-dom";
export default function OurServiceCard({ title, image }) {
    const navigate = useNavigate();
    return(
        <div className=" w-[280px] md:w-[335px] lg:w-[395px] h-[100px] md:[120px] lg:h-[150px] bg-[#F5F5F5] rounded-[10px] md:rounded-[20px] lg:rounded-[20px]   flex space-x-[25px] p-[15px] md:p-[18px] lg:p-[20px] items-center">
            <div>
                <img src={image} alt="Service" className="h-[70px] md:h-[80px] lg:h-[100px]" />
            </div>
            <div className="space-y-[15px]">
                <h1 className="font-[600] text-[16px] md:text-[18px] lg:text-[20px]">{title}</h1>
                <BookButton text={"Book now"} textSize={"14px"} w={"100px"} h={"25px"} onClick={()=>{navigate('/contact')}}/>
            </div>
        </div>
    )
}