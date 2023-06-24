import { useNavigate } from "react-router-dom";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";

export const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const incVote = () => {};

  const [bookmark, setBookmark] = useState(false);

  return (
    <div className="w-[35rem] flex justify-center gap-8 p-4 rounded-[0.5rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex flex-col justify-start items-center">
        <div className="up_arrow">
          <ArrowDropUpIcon />
        </div>
        <p>{voteCount}</p>
        <div className="down_arrow">
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className="flex flex-col items-start gap-4">
        <div className="flex gap-4 items-center ">
          <img src={post.picUrl} alt="" className="w-[40px] h-[40px]" />
          <p>
            posted by{" "}
            <strong className="text-primary-color">@{post.username}</strong>
          </p>
        </div>
        <div className="font-bold text-2xl">
          <h2>{post.postContent}</h2>
        </div>
        <div className="flex gap-4">
          {post.tags.map((tag) => (
            <p className="text-primary-color px-2 py-1 bg-sec-color rounded-[0.5rem]">
              {tag}
            </p>
          ))}
        </div>
        <div>
          <p>{post.postDescription}</p>
        </div>
        <hr />
        <div className="flex  gap-4">
          <div onClick={() => navigate(`postDetail/${post.postId}`)}>
            <ModeCommentOutlinedIcon />
          </div>

          <ShareIcon />
          {bookmark ? (
            <div onClick={() => setBookmark(false)}>
              <BookmarkIcon />
            </div>
          ) : (
            <div onClick={() => setBookmark(true)}>
              <BookmarkBorderOutlinedIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
