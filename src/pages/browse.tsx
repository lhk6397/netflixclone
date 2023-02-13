import Banner from "@components/browse/Banner";
import Slider from "@components/browse/Slider";
import Layout from "@components/global/Layout";
import { Box, Container } from "@mui/material";

export interface IMovie {
  adult: boolean;
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  genre_ids: number[];
  release_date: string;
}

export interface IGetMovies {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

const browse = ({ movies }: { movies: IGetMovies }) => {
  const firstMovie = movies.results[0];
  return (
    <Layout seoTitle="홈">
      <Banner firstMovie={firstMovie} />
      <Box
        sx={{
          bgcolor: "common.black",
          display: "flex",
          flexDirection: "column",
          px: 10,
        }}
      >
        <Slider data={movies.results} text="Now Playing" />
        <Slider data={movies.results} text="Now Playing" />
        <Slider data={movies.results} text="Now Playing" />
        <Slider data={movies.results} text="Now Playing" />
        <Slider data={movies.results} text="Now Playing" />
      </Box>
    </Layout>
  );
};

export async function getServerSideProps() {
  const movies: IGetMovies = await await (
    await fetch(
      `${process.env.BASE_PATH}/movie/now_playing?api_key=${process.env.API_KEY}&page=1`
    )
  ).json();
  return { props: { movies } };
}

export default browse;
