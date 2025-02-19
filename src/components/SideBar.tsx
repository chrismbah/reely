import { HomeIcon, SearchIcon, ExploreIcon, ReelsIcon } from "./icons";
const SideBar = () => {
  return (
    <aside className="hidden flex-col items-start border-r border-gray-800 p-3 md:flex md:w-[244px]">
      {/* Logo or placeholder */}
      <div className="my-8 px-1">
        <h1 className="font-bold logo text-4xl tracking-[3px]">Reely!</h1>
      </div>
      {/* Nav icons */}
      <nav className="flex flex-col gap-1 w-full">
        <div className="w-full h-full flex items-center py-4 px-3 gap-4 cursor-pointer rounded bg-black hover:bg-gray-100/10">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="w-full h-full flex items-center py-4 px-3 gap-4 cursor-pointer rounded bg-black hover:bg-gray-100/10">
          <SearchIcon />
          <p>Search</p>
        </div>{" "}
        <div className="w-full h-full flex items-center py-4 px-3 gap-4 cursor-pointer rounded bg-black hover:bg-gray-100/10">
          <ExploreIcon />
          <p>Explore</p>
        </div>{" "}
        <div className="w-full h-full flex items-center py-4 px-3 gap-4 cursor-pointer rounded bg-black hover:bg-gray-100/10">
          <ReelsIcon />
          <p>Reels</p>
        </div>{" "}
      </nav>
    </aside>
  );
};

export default SideBar;
