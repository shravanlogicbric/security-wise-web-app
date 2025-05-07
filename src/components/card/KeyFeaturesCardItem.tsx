interface Props {
  item: any;
}
const KeyFeaturesCardItem = ({ item }: Props) => {
  return (
    <div
      className={`rounded-3xl z-10 overflow-hidden transition duration-1000 ease-in-out hover:bg-gradient-to-bl from-[var(--button-gradient-end)] via-black from-2% via-20% to-205%    to-[var(--button-gradient-end)] hover:shadow-sm shadow-[rgb(var(--button-shadow))]/40 p-[1px] ${item?.className}`}
    >
      <div className="group overflow-hidden rounded-3xl p-6 max-sm:p-4 backdrop-blur-sm bg-gradient-to-b from-[#0F0F0F] to-transparent">
        {item.icon ? <img src={item.icon} /> : null}
        <div
          className={`text-white text-[28px] ${
            item.icon ? "mt-12" : ""
          } max-sm:mt-7 max-sm:text-[20px]`}
        >
          {item.title}
        </div>
        <div
          className={`text-[#A1A1A1] text-[18px] ${
            item.image ? "mb-12" : ""
          } max-sm:text-sm`}
        >
          {item.description}
        </div>
        {item.image ? <img src={item.image} /> : null}
      </div>
    </div>
  );
};
export default KeyFeaturesCardItem;
