import { HomeIcon, SearchIcon, ExploreIcon, ReelsIcon } from "./icons";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 flex w-full items-center justify-around border-t border-gray-800 bg-black p-2 md:hidden z-50">
      <div className="w-full h-full flex items-center py-4 px-3 gap-4 cursor-pointer rounded bg-black hover:bg-gray-100/10">
        <HomeIcon />
      </div>
      <div className="w-full h-full flex items-center py-4 px-3 gap-4 cursor-pointer rounded bg-black hover:bg-gray-100/10">
        <SearchIcon />
      </div>{" "}
      <div className="w-full h-full flex items-center py-4 px-3 gap-4 cursor-pointer rounded bg-black hover:bg-gray-100/10">
        <ExploreIcon />
      </div>{" "}
      <div className="w-full h-full flex items-center py-4 px-3 gap-4 cursor-pointer rounded bg-black hover:bg-gray-100/10">
        <ReelsIcon />
      </div>{" "}
    </nav>
  );
};

export default BottomNav;
