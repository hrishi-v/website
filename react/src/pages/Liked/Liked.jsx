import CatalogueListing from "../../components/CatalogueListing";
import Navbar from "../../components/UniversalNavBar";

export default function Liked() {
  return (
    <>
      <Navbar />
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
