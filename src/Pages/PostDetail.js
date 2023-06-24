import { Navbar } from "../Component/Navbar";
import { LeftSideBar } from "../Component/LeftSideBar";
import { useParams } from "react-router-dom";
import { useForumContext } from "../Context/ForumContext";
import { PostCard } from "../Component/PostCard";

// {
//     commentId: "89898-856-87576",
//     username: "ashwin4real",
//     picUrl: "http://bit.ly/42Zm7tM",
//     likes: 0,
//     comment: "Interested",
//     createdAt: "2023-06-24T12:01:00Z",
//   },
export const PostDetail = () => {
  const { postId } = useParams();
  const { data } = useForumContext();
  const findPost = data?.find((item) => item.postId === postId);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-8 flex gap-[18rem] p-8">
        <div>
          <LeftSideBar />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <PostCard post={findPost} />
          </div>
          <div className="p-4">
            {findPost?.comments?.map((item) => (
              <div className="felx flex-col gap-4">
                <div className="flex gap-4">
                  <img src={item?.picUrl} className="w-[40px] h-[40px]" />
                  <div>
                    <strong>{item?.username}</strong>
                    <p>@{item?.username}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p>replying to @{findPost.username}</p>
                  <p>{item.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
