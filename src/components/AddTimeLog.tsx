"use client"
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
import { useLogStore } from "@/store";
import { toast, useToast } from "@/hooks/use-toast"
import { ToastAction } from "@radix-ui/react-toast";
import dayjs from "dayjs";

const DialogDemo = () => {
  const log = useLogStore((state) => state.log)
  const logs = useLogStore((state) => state.setLog)
  const setLog = useLogStore((state) => state.setLog)
  const setLogs = useLogStore((state) => state.setLogs)

  const validateLog = () => {
    if(!log.date || !log.hour || log.hour === 0) {
      throw "Date or hour can not be empty!"
    }else if (log.hour >= 24) {
      throw "Please enter a valid hour"
    }
  }

  const closeDialog = () => {
    document.getElementById('close-btn')?.click()
  }

  const submitLog = () => {
    try {
      validateLog()
      setLogs(log, dayjs(log.date).format("YYYY-MM-DD"))
      toast({
        title: "Success create log",
        description: `${log.hour} hour in ${log.date.toDateString()}`,
      })
      closeDialog()
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Faill to create log",
        description: e as string,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

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
            <Input id="hour" type="number" className="col-span-3"
                 value={log.hour}
                 onChange={(e) => setLog({...log, hour: parseInt(e.target.value)})} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="note" className="text-right">
              Note
            </Label>
            <Input id="note" type="string" placeholder="note for the log" className="col-span-3" 
                 value={log.note}
                 onChange={(e) => setLog({...log, note: e.target.value })}/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={submitLog}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default DialogDemo
