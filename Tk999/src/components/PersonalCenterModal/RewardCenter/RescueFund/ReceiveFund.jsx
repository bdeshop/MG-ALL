import receiveImage from "../../../../assets/receiveImage.png";

const ReceiveFund = () => {
  return (
    <div className="p-4">
      <div className=" relative w-[250px] p-2 bg-white shadow-xl">
        <div className="flex gap-2 items-center ">
          <img src={receiveImage} alt="" />
          <p>000</p>
        </div>
        <button className="text-textRed right-2 top-4 absolute hover:bg-[#30d005] bg-[#ececec] px-4 text-xs rounded-full p-1">
          Receive
        </button>
      </div>
      <div className="flex justify-between">
        <p>
            Type:  --
        </p>
        <p>
            Claim Time:  --
        </p>
      </div>
    </div>
  );
};

export default ReceiveFund;
