export default function TeamMember(props) {
  const { icon, alt, name, role, className, colorMode } = props;

  // Definir classes de cor com base no modo
  const bgClassesIcon = {
    dark: "bg-primary",
    light: "bg-minititle",
    default: "bg-primary",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };

  const bgClass = bgClassesIcon[colorMode] || bgClassesIcon.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <div
      className={`max-w-[315px] m-auto h-[230px] tablet1:h-[250px] p-4 tablet1:w-[290px] mt-[36px] tablet1:mt-0 desktop1:w-[260px] desktop1:h-[250px] flex flex-col items-center desktop1:hover:scale-110 transition desktop1:p-4 bg-white rounded-md justify-between ${className}`}
    >
      <div
        className={`h-[64px] w-[64px] rounded-md flex justify-center items-center text-labelButtons ${bgClass}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-scale-icon lucide-scale"
        >
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="M7 21h10" />
          <path d="M12 3v18" />
          <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </svg>
      </div>
      <h1
        className={`h-[80px] font-bold font-mainFont text-paragraph5 text-center ${textClass}`}
      >
        {name}
      </h1>
      <p
        className={`text-center opacity-70 font-mainFont w-[90%] ${textClass}`}
      >
        {role}
      </p>
    </div>
  );
}
