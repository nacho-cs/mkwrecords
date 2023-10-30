import {
  Table,
  TableRow,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { PlayerInfo } from "@/components/player-info";
import { GhostInfo } from "@/components/ghost-info";
import { format } from "timeago.js";

export function Leaderboard({ data, flap }) {
  const keyName = flap ? "bestSplitSimple" : "finishTimeSimple";

  return (
    <Table className="w-[600px]">
      <TableHeader>
        <TableRow>
          <TableHead>Place</TableHead>
          <TableHead className="w-[35%]">Player</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((ghost, i) => (
          <TableRow key={i}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>
              <PlayerInfo path={ghost._links.player.href}>
                {ghost.player}
              </PlayerInfo>
            </TableCell>
            <TableCell>
              <GhostInfo path={ghost._links.item.href}>
                {ghost[keyName]}
              </GhostInfo>
            </TableCell>
            <TableCell>{format(ghost.dateSet)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
