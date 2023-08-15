import CatalogueListing from "../../components/CatalogueListing";
import UniversalNavBar from "../../components/UniversalNavBar";

export default function Liked() {
  return (
    <>
      <UniversalNavBar />
      <h1 className="category">Liked Items</h1>
      <div className="listing">
        <CatalogueListing />
      </div>
      <div className="listing">
        <CatalogueListing />
      </div>
    </>
  );
}
