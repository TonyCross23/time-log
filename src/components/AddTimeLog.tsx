import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePickerDemo } from "./DatePicker";

const DialogDemo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full sm:w-74 border-dashed border py-3 gap-3 flex items-center justify-center rounded-sm hover:border-solid cursor-pointer">
          <FaPlus/> 
          <span>Create Date Log</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Time Log</DialogTitle>
          <DialogDescription>
            {
              "Remember, time is your most valuable asset-invest it wisely with our Time Log App!"
            }
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hour" className="text-right">
              Date{" "}
            </Label>
            <DatePickerDemo/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hour" className="text-right">
              Hour
            </Label>
            <Input id="hour" type="number" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="note" className="text-right">
              Note
            </Label>
            <Input id="note" type="string" placeholder="note for the log" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default DialogDemo
