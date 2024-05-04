import CraftCard from "./craft-card";
import Masonry from "./masonry";

const Grid = ({ craft }) => {
  return (
    <Masonry
      className="grid justify-items-center  sm:grid-cols-2  gap-3"
      breakpointCols={{
        1: 1,
        640: 2,
        default: 3,
      }}
    >
      {craft.map((craft) => (
        <CraftCard key={craft.id} data={craft.data} />
      ))}
    </Masonry>
  );
};
export default Grid;
