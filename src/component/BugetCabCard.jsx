import BookButton from "./Button"

export default function BugetCabCard({title, image}) {
    return(
        <div className="h-[220px] w-[230px] md:h-[200px] lg:h-[250px] md:w-[200px] lg:w-[230px] outline-0 rounded-[30px] shadow bg-white flex flex-col justify-center items-center gap-5" >
            <p className="text-[#A3A3A3]">{title}</p>
            <img src={image} alt="Service" className="h-[100px] " />
            <BookButton text={"Book now"} textSize={"14px"} w={"100px"} h={"30px"}/>
        </div>
    )
}