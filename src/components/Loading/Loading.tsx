

const Loading = () => {
  return (
    <div className="fixed w-full h-full items-center justify-center z-50 bg-white overflow-hidden">

      <div className="w-full h-full flex items-center justify-center">

      <div className="w-14 h-14">
        <div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full">
          <span className="h-5 w-5 rounded-tl-full bg-gray-500 animate-[ping_1.4s_linear_infinite]"></span>{" "}
          <span className="h-5 w-5 rounded-tr-full bg-gray-500 animate-[ping_1.8s_linear_infinite]"></span>
          <span className="h-5 w-5 rounded-bl-full bg-gray-500 animate-[ping_2.2s_linear_infinite]"></span>
          <span className="h-5 w-5 rounded-br-full bg-gray-500 animate-[ping_2.6s_linear_infinite]"></span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Loading;