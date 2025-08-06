import AboutHead from "@/Components/AboutHead";
import Line from "@/Components/Line";
import MeetTheLeaders from "@/Components/MeetTheLeaders";
import Soldier from "@/Components/Soldier";
import AbtRect from "@/Components/AbtRect";
import Arrow from "@/Components/Arrow";

export default function Page() {
  return (
    <>
      <div className="bg-[#222222]">
        <AboutHead />
        <Line />
        <Soldier />
        <Arrow showOnAllScreens={true} />
        
        {/* needed to hide the founding members for personal reasons */}
        {/* <MeetTheLeaders/> */}
        
        <AbtRect />
      </div>
    </>
  );
}
