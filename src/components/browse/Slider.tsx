import { makeImagePath } from "@libs/makeImagePath";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { IMovie } from "../../pages/browse";

interface SliderProps {
  data: IMovie[];
  text: string;
}

const Slider = ({ data, text }: SliderProps) => {
  const offset = 6;
  const [index, setIndex] = useState(0);
  return (
    <Box sx={{ bgcolor: "common.black" }}>
      <Typography variant="h4" component="h3" color="common.white">
        {text}
      </Typography>
      <Carousel animation="slide" autoPlay={false} indicators={false}>
        {data
          .slice(offset * index, offset * index + offset)
          .map((movie, idx) => (
            <Box key={idx} sx={{ display: "flex", bgcolor: "transparent" }}>
              <Box sx={{ position: "relative", py: 20, px: 10 }}>
                <Image
                  src={makeImagePath(movie.poster_path)}
                  alt={movie.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>
          ))}
      </Carousel>
    </Box>
  );
};

export default Slider;
