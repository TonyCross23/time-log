import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const LogTable = () => {
  return (
    <Table>
      <TableCaption>List of logs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3">Date</TableHead>
          <TableHead className="w-1/3">Hour</TableHead>
          <TableHead className="w-1/5">Note</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">{new Date().toDateString()}</TableCell>
          <TableCell>10</TableCell>
          <TableCell>This is hehe</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default LogTable
