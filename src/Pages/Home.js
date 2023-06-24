import { Navbar } from "../Component/Navbar";
import { LeftSideBar } from "../Component/LeftSideBar";
import { PostCard } from "../Component/PostCard";
import { RightSidebar } from "../Component/RightSideBar";

import { useForumContext } from "../Context/ForumContext";
export const Home = () => {
  const { data } = useForumContext();
  console.log(data);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-8 flex   justify-between p-8">
        <div>
          <LeftSideBar />
        </div>
        <div className="flex flex-col gap-4">
          {data.map((userpost) => (
            <PostCard post={userpost} />
          ))}
        </div>
        <div>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};
