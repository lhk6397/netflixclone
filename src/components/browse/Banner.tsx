import { makeImagePath } from "@libs/makeImagePath";
import { Box, Stack, Typography } from "@mui/material";
import { IMovie } from "../../pages/browse";

const Banner = ({ firstMovie }: { firstMovie: IMovie }) => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${makeImagePath(
          firstMovie?.backdrop_path
        )})`,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        p: 10,
        backgroundSize: "cover",
      }}
    >
      <Stack maxWidth="40vw" spacing={2}>
        <Typography variant="h1" color="common.white">
          {firstMovie?.title}
        </Typography>
        <Typography variant="h4" component="h3" color="common.white">
          {firstMovie?.overview}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Banner;
