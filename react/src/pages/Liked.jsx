import CatalogueListing from "../components/CatalogueListing";
import UniversalNavBar from "../components/UniversalNavBar";

export default function Liked() {
  return (
    <>
      <UniversalNavBar />
      <h1 className="category">Liked Items</h1>
      <div className="prod-1">
        <CatalogueListing />
      </div>
      <div className="prod-2">
        {" "}
        <CatalogueListing />
      </div>
    </>
  );
}
