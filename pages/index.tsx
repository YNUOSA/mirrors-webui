import { stringify } from "querystring";

export async function getServerSideProps(): Promise<{ props: MirrorsProps }> {
  const images: Image[] = await fetch("https://mirrors.ynu.edu.cn/jobs").then(
    (response) => response.json()
  );
  images.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return {
    props: {
      images,
    },
  };
}

interface MirrorsProps {
  images: Image[];
}

interface Image {
  is_master: boolean;
  last_ended: string;
  last_ended_ts: number;
  last_started: string;
  last_started_ts: number;
  last_update: string;
  last_update_ts: number;
  name: string;
  next_schedule: string;
  next_schedule_ts: number;
  size: string;
  status: ImageStatus;
  upstream: string;
}
type ImageStatus =
  | "none"
  | "failed"
  | "success"
  | "syncing"
  | "pre-syncing"
  | "paused"
  | "disabled"
  | "";
const Mirrors = ({ images }: MirrorsProps) => {
  return (
    <div>
      {images.map((image) => {
        return (
          <div key={image.name}>
            <span>{image.name}</span>
            <span>{image.is_master}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Mirrors;
