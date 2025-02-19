import SideBar from "@/components/SideBar";
import BottomNav from "@/components/BottomNav";
import ReelsContainer from "@/components/ReelsContainer";

export default function Reels() {
  return (
    <div className="flex h-screen bg-black text-white">
      <SideBar />
      <main className="flex-1 flex flex-col">
        <ReelsContainer />
      </main>
      <BottomNav />
    </div>
  );
}
