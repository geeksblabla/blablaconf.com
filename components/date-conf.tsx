export const DateConf = ({
  className = "bg-gray-100",
}: {
  className?: string;
}) => {
  return (
    <div
      className={`${className} py-2 px-5 w-fit align-middle self-center rounded-full text-sm animated-border text-center`}
    >
      <span className="font-medium"> 19-23 December, 2022 💻 </span>
      <span className="text-emerald-700">Online </span>
      <span className="hidden md:inline-block"> | </span>
      <br className="md:hidden" />
      <span className="font-medium"> 24 December, 2022 🤝</span>
      <span className="text-red-500"> In Person </span>
    </div>
  );
};
