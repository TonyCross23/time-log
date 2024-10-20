import DialogDemo from "@/components/AddTimeLog";
import Calendar from "@/components/Calendar";
import LogTable from "@/components/LogTable";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-5 space-y-10">
      <Navbar/>
      <DialogDemo/>
      <Calendar/>
      <LogTable/>
    </div>
  );
}
