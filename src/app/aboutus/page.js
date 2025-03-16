import AboutHead from "@/Components/AboutHead";
import Line from "@/Components/Line";
import MeetTheLeaders from "@/Components/MeetTheLeaders";
import Soldier from "@/Components/Soldier";
import AbtRect from "@/Components/AbtRect";
import Arrow from "@/Components/Arrow";


export default function Page() {
  return (
    <>
      <AboutHead />
      <Line/>
      <Soldier/>
      <Arrow showOnAllScreens={true} />
      <MeetTheLeaders/>
      <AbtRect/>
    </>
  );
}
