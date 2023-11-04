import {
  VisXYContainer,
  VisStackedBar,
  VisAxis,
  VisTooltip,
} from "@unovis/react";
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
import { Loader2 } from "lucide-react";
import { StackedBar } from "@unovis/ts";

export function GhostInfo({ path, children }) {
  const { data, isLoading } = useSwr(path, fetcher);
  const controllerMap = ["Wii wheel", "Nunchuk", "Classic", "Gamecube"];
  const x = d => d.x;
  const y = d => d.y;
  const style = {
    "--vis-axis-grid-color": "#3d3840",
    "--vis-axis-tick-color": "#3d3840",
  };
  const minToSec = min => {
    const [minutes, seconds] = min.split(":").map(parseFloat);

    return (minutes * 60 + seconds).toFixed(3);
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-4">
        <Loader2 className="h-4 w-4 animate-spin" />
        {children}
      </div>
    );
  }

  const splitTimes = data.splitsSimple.map((split, i) => {
    return {
      x: i + 1,
      y: minToSec(split),
    };
  });
  const triggers = {
    [StackedBar.selectors.bar]: d => `<span>${d.y}</span>`,
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {data.player} on {data.trackName}
          </DialogTitle>
          <DialogDescription>
            Controller: {controllerMap[data.controller]} •{" "}
            <a
              href={`tt.https://chadsoft.co.uk${path.replace(/json$/, "rkg")}`} className="hover:underline">
              Download
            </a>
          </DialogDescription>
        </DialogHeader>
        <VisXYContainer
          data={splitTimes}
          height={250}
          width="100%"
          style={style}>
          <VisStackedBar x={x} y={y} />
          <VisAxis type="y" />
          <VisTooltip triggers={triggers} />
        </VisXYContainer>
      </DialogContent>
    </Dialog>
  );
}
