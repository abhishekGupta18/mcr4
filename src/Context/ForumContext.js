import { createContext, useContext, useState } from "react";

import { forumData } from "../Data";

export const ForumContext = createContext();

export const ForumContextProvider = ({ children }) => {
  const [data, setData] = useState(forumData.posts);

  return (
    <ForumContext.Provider value={{ data }}>{children}</ForumContext.Provider>
  );
};

export const useForumContext = () => {
  return useContext(ForumContext);
};
