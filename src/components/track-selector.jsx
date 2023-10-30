import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { slug } from "github-slugger";

export function TrackSelector({ cupName, cupTracks }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Select a track</CardTitle>
        <CardDescription>View this track's leadeboards</CardDescription>
      </CardHeader>
      <CardContent>
        {cupTracks.map((track, i) => {
          return (
            <>
              <a
                href={`/records/${cupName}/${slug(track)}`}
                className="text-lg"
                key={track}>
                {track}
              </a>
              {i < 3 ? <Separator className="w-full my-2" key={track} /> : null}
            </>
          );
        })}
      </CardContent>
    </Card>
  );
}
