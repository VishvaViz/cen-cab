export default function BookButton({ text, onClick, w, h, textSize }) {
    return (
      <button
        className={`bg-[#00B0B0] rounded-[20px] text-white hover:text-white hover:drop-shadow-lg transition duration-300 hover:cursor-pointer font-[Lilita_One]`}
        style={{
          width: w, 
          height: h, 
          fontSize: textSize 
        }}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  