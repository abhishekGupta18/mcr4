export const RightSidebar = () => {
  return (
    <div className="w-[15rem] bg-sec-color rounded-[0.5rem] flex flex-col gap-4 items-center p-4">
      <p>Sort By</p>
      <div className="flex flex-col gap-4">
        <button className="text-primary-color px-2 py-1 bg-sec-color rounded-[0.5rem] border border-solid border-black">
          Latest Post
        </button>
        <button className="text-primary-color px-2 py-1 bg-sec-color rounded-[0.5rem] border border-solid border-black">
          Votes
        </button>
      </div>
    </div>
  );
};
