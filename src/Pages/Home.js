import { Navbar } from "../Component/Navbar";
import { LeftSideBar } from "../Component/LeftSideBar";
export const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-8">
        <div>
          <LeftSideBar />
        </div>
      </div>
    </div>
  );
};
