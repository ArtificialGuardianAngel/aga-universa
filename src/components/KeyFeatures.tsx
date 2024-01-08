const KeyFeatures = () => {
  return (
    <div className="p-[50px_0] flex flex-col gap-[35px]">
      <h3 className="text-[30px] font-[300] text-white text-center sora md:text-[20px] md:max-w-[210px] md:m-auto">
        Key features of your AI Agent creation
      </h3>

      <div className="flex gap-[5px] text-center text-[16px] text-white leading-[20px] md:flex-col">
        <div className="p-[40px_30px] flex-1 rounded-[10px] bg-white/[0.03]">
          Benevolent Agent by nature
        </div>
        <div className="p-[40px_30px] flex-1 rounded-[10px] bg-white/[0.03]">
          Decentralized node/container creation for Agents
        </div>
        <div className="p-[40px_30px] flex-1 rounded-[10px] bg-white/[0.03]">
          Universally connected with other Agents
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
