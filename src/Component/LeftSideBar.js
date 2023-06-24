import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { useForumContext } from "../Context/ForumContext";
export const LeftSideBar = () => {
  const { data } = useForumContext();
  return (
    <div className="w-[15rem] bg-sec-color flex flex-col justify-start items-center h-[40rem] rounded-[0.5rem]">
      <div className="flex flex-col gap-4 px-auto py-4">
        <div className="flex items-center gap-2">
          <HomeOutlinedIcon /> Home
        </div>
        <div className="flex items-center gap-2">
          <RocketOutlinedIcon /> Explore
        </div>
        <div className="flex items-center gap-2">
          <BookmarkBorderOutlinedIcon /> Bookmarks
        </div>
        <div className="flex items-center gap-2">
          <AccountCircleOutlinedIcon /> Profile
        </div>
        <div className="flex  mt-[15rem] gap-2">
          <img
            src={data?.picUrl}
            alt="user-profile"
            className="w-[50px] h-[50px]"
          />
          <div>
            <p>{data?.name}</p>
            <p>@{data?.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
