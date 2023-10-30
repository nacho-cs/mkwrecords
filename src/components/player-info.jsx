import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import useSwr from "swr";
import { fetcher } from "@/components/fetcher";
import {
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
  Tooltip,
} from "@/components/ui/tooltip";
import {
  Table,
  TableRow,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "timeago.js";
import { Loader2 } from "lucide-react";

export function PlayerInfo({ children, path }) {
  const { data, isLoading } = useSwr(`${path}?start=0&limit=10`, fetcher);
  const controllerMap = ["Wii wheel", "Nunchuk", "Classic", "Gamecube"];

  return isLoading ? (
    <div className="flex items-center gap-4">
      <Loader2 className="h-4 w-4 animate-spin" />
      {children}
    </div>
  ) : (
    <TooltipProvider>
      <Dialog>
        <DialogTrigger>
          {children}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <Tooltip>
                <TooltipTrigger>{data.miiName}</TooltipTrigger>
                <TooltipContent>
                  Also goes by: {data.miiNames.join(", ")}
                </TooltipContent>
              </Tooltip>
            </DialogTitle>
            <DialogDescription>
              Controller: {controllerMap[data.controller]}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-72">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50%]">Track</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.ghosts.map((ghost, i) => (
                  <TableRow key={i}>
                    <TableCell>{ghost.trackName}</TableCell>
                    <TableCell>{ghost.finishTimeSimple}</TableCell>
                    <TableCell>{format(ghost.dateSet)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}
