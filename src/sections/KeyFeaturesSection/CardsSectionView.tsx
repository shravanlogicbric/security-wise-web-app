import KeyFeaturesCardItem from "@src/components/card/KeyFeaturesCardItem";
import keyFeaturesContent, {
  keyFeaturesForMobileViewContent,
} from "@src/constants/keyFeaturesContent";

const CardsSectionView = () => {
  const groupIntoThrees = (arr: any[]) => {
    const grouped = [];
    for (let i = 0; i < arr.length; i += 2) {
      grouped.push(arr.slice(i, i + 2));
    }
    return grouped;
  };

  const groupedCards = groupIntoThrees(keyFeaturesContent);

  return (
    <>
      <div className="block md:hidden mt-6">
        {keyFeaturesForMobileViewContent.map((item) => (
          <div className="mb-3.5" key={item.title}>
            <KeyFeaturesCardItem item={item} />
          </div>
        ))}
      </div>
      <div className="hidden md:grid grid-cols-3 gap-3.5 mt-20">
        {groupedCards.map((group) => {
          return (
            <div className="grid grid-cols-1 gap-3.5">
              {group.map((item) => {
                return (
                  <div className="mv-3.5">
                    <KeyFeaturesCardItem item={item} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardsSectionView;
