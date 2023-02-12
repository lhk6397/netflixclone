import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  AppBar,
  Toolbar,
  MenuItem,
  Select,
} from "@mui/material";
import BorderedBottomBox from "./wrapper/BorderBottomBox";
const Header = ({ openModal }: { openModal: () => void }) => {
  return (
    <BorderedBottomBox>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{ backgroundColor: "transparent", padding: "25px 20px" }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs>
              <Image
                src="/images/netflix.svg"
                height={45}
                width={167}
                alt="Netflix logo"
              />
            </Grid>
            <Grid item xs="auto">
              <Select
                name="lang"
                variant="outlined"
                size="small"
                defaultValue="KR"
                sx={{
                  border: `2px solid #fff`,
                  color: "common.white",
                  "& .MuiSelect-icon": {
                    color: "common.white",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              >
                <MenuItem value="KR">Korean</MenuItem>
                <MenuItem value="EN">English</MenuItem>
              </Select>
            </Grid>
            <Grid item xs="auto">
              <Button variant="contained" color="primary" onClick={openModal}>
                SIGN IN
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: "relative",
          height: "745px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::after": {
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            content: "''",
            background: "rgba(0,0,0,0.4)",
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(0,0,0,0.6) 0,
              rgba(0,0,0,0) 60%,
              rgba(0,0,0,0.8) 100%,
            )`,
          },
        }}
      >
        <Image
          priority
          src="/images/backdrop.jpg"
          fill
          alt="Backdrop Netflix"
          style={{ objectFit: "cover" }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 10 }}>
          <Typography
            variant="h2"
            component="h1"
            color="common.white"
            fontWeight={600}
            textAlign="center"
          >
            영화와 시리즈를 무제한으로.
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="common.white"
            textAlign="center"
            gutterBottom
          >
            다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="common.white"
            textAlign="center"
            sx={{ my: 3 }}
          >
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </Typography>
          <Grid
            container
            sx={{
              width: "68%",
              mx: "auto",
            }}
          >
            <Grid item xs>
              <TextField
                variant="filled"
                label="Email address"
                fullWidth
                sx={{
                  bgcolor: "common.white",
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}
              />
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  height: "100%",
                  borderRadius: 0,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                }}
              >
                Get started
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </BorderedBottomBox>
  );
};

export default Header;
