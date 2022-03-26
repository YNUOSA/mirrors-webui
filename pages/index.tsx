import {
  Chip,
  Container,
  imageListItemBarClasses,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import Box from "@mui/material/Box";
import moment from "moment-timezone";
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
  function imageStatusColorMapping(
    status: ImageStatus
  ): "success" | "error" | "primary" | "default" {
    switch (status) {
      case "success":
        return "success";
      case "failed":
        return "error";
      case "syncing":
        return "primary";
      default:
        return "default";
    }
  }
  return (
    <Box>
      <Container maxWidth="xl">
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Last Update</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {images.map((image) => {
                return (
                  <TableRow key={image.name} hover={true}>
                    <TableCell>{image.name}</TableCell>
                    <TableCell align="right">
                      {moment
                        .unix(image.last_update_ts)
                        .tz("Asia/Shanghai")
                        .format("YYYY-MM-DD HH:mm")}
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip
                        title={`last update: ${moment
                          .unix(image.last_ended_ts)
                          .tz("Asia/Shanghai")
                          .format("YYYY-MM-DD HH:mm")}`}
                        placement="top"
                      >
                        <Chip
                          label={image.status}
                          size="small"
                          color={imageStatusColorMapping(image.status)}
                        />
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};
export default Mirrors;
