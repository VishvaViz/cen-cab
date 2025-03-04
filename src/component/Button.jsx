export default function BookButton({ text, onClick,w,h,textSize }) {
    return (
        <button className={`bg-[#00B0B0] rounded-[20px] text-white  w-[${w}] h-[${h}] ${textSize} font-[Lilita_One] hover:text-white hover:drop-shadow-lg transition duration-300 hover:cursor-pointer`} onClick={onClick}>
            {text}
        </button>
    )
}