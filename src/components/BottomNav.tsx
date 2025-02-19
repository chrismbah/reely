import { HomeIcon, SearchIcon, ExploreIcon, ReelsIcon } from "./icons";

const BottomNav = () => {
  return (
    <nav className="fixed h-[7vh] bottom-0 flex w-full items-center justify-around border-t border-gray-800 bg-black p-2 md:hidden z-50">
      <div className="flex items-center cursor-pointer rounded bg-black hover:bg-gray-100/10">
        <HomeIcon />
      </div>
      <div className="flex items-center cursor-pointer rounded bg-black hover:bg-gray-100/10">
        <SearchIcon />
      </div>{" "}
      <div className="flex items-center cursor-pointer rounded bg-black hover:bg-gray-100/10">
        <ExploreIcon />
      </div>{" "}
      <div className="flex items-center cursor-pointer rounded bg-black hover:bg-gray-100/10">
        <ReelsIcon />
      </div>{" "}
    </nav>
  );
};

export default BottomNav;
