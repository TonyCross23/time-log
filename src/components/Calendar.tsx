"use client"
import React from 'react'
import dayjs from 'dayjs'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from '@/lib/utils'
import { useLogStore } from '@/store'
import { log } from 'console'


const Calendar = () => {

  const logs = useLogStore((state) => state.logs);

  const getDateMonth = ( year= dayjs().year(), month = dayjs().month()) => {
    const startDate = dayjs().year(year).month(month).date(1)
    const endDate = startDate.endOf("month")

    const dateArray = []

    for(let i= startDate.date(); i <= endDate.date(); i++) 
      {
        dateArray.push(startDate.date(i).format("YYYY-MM-DD"))
      }
      
      return dateArray;
  }

  const getColor = (value:number) => {
    if (value === 0) {
      return "bg-gray-100"
    }else if (value < 5) {
      return "bg-green-100"
    }else if (value < 10) {
      return "bg-green-300"
    }else {
      return "bg-green-500"
    }
  }
  const hour = 4

  return (
    <div className='flex flex-wrap border border-dashed p-10 items-center justify-center rounded-md gap-2'>
      {
          getDateMonth().map((value,index) => {
            const log = logs[value]
            return (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <div className={cn('h-5 w-5  rounded-sm cursor-pointer',getColor(log?.hour || 0))}></div>
                </HoverCardTrigger>
                <HoverCardContent>
                  {log?.hour || 0} Hour on {value}
                </HoverCardContent>
              </HoverCard>
            )
         })
      }
    </div>
  )
}

export default Calendar
