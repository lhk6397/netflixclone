import BorderedBottomBox from "./wrapper/BorderBottomBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Image from "next/image";
import { blue, grey } from "@mui/material/colors";

const Title = ({ text }: { text: string }) => (
  <Typography
    variant="h3"
    component="h2"
    gutterBottom
    sx={{ textAlign: { xs: "center", md: "left" } }}
  >
    {text}
  </Typography>
);

const Description = ({ text }: { text: string }) => (
  <Typography
    variant="h5"
    component="h3"
    sx={{ textAlign: { xs: "center", md: "left" } }}
  >
    {text}
  </Typography>
);

const Features = () => {
  return (
    <Box sx={{ bgcolor: "common.black", color: "common.white" }}>
      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid item xs={12} md={6}>
              <Title text="TV로 즐기세요." />
              <Description text="스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요." />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Image
                    src="/images/tv.png"
                    width={640}
                    height={480}
                    alt="TV"
                    layout="responsive"
                  />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    maxWidth: "72%",
                    maxHeight: "54%",
                    top: "48%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <video
                    src="/videos/tv.m4v"
                    style={{ height: "100%", width: "100%" }}
                    autoPlay
                    muted
                    playsInline
                    loop
                  ></video>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Box sx={{ position: "relative" }}>
                <Box>
                  <Image
                    src="/images/mobile.jpg"
                    width={640}
                    height={480}
                    alt="mobile"
                    layout="responsive"
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    zIndex: 1,
                    bgcolor: "common.black",
                    border: `2px solid ${grey[700]}`,
                    borderRadius: 2,
                    p: 1,
                    width: {
                      xs: "80%",
                      sm: "70%",
                      md: "60%",
                    },
                    bottom: {
                      xs: "5%",
                      md: "10%",
                    },
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={2} md={3}>
                      <Image
                        src="/images/boxshot.png"
                        width={55}
                        height={80}
                        alt="Boxshot"
                      />
                    </Grid>
                    <Grid item xs={8} md={6}>
                      <Typography>Stranger Things</Typography>
                      <Typography variant="body1" color={blue.A400}>
                        Downloading...
                      </Typography>
                    </Grid>
                    <Grid item xs={2} md={3}>
                      {" "}
                      <Image
                        src="/images/download.gif"
                        width={53}
                        height={50}
                        alt="Download"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Title text="즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요." />
              <Description text="광고형 베이식을 제외한 모든 멤버십에서 이용할 수 있습니다." />
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid item xs={12} md={6}>
              <Title text="다양한 디바이스에서 시청하세요." />
              <Description text="각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다." />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Image
                    src="/images/devices.png"
                    width={640}
                    height={480}
                    alt="devices"
                    layout="responsive"
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    maxWidth: "65%",
                    maxHeight: "49%",
                    top: "33%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <video
                    src="/videos/devices.m4v"
                    style={{ height: "100%", width: "100%" }}
                    autoPlay
                    muted
                    playsInline
                    loop
                  ></video>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={12}>
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Box>
                <Image
                  src="/images/kids.png"
                  width={640}
                  height={480}
                  alt="kids"
                  layout="responsive"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Title text="어린이 전용 프로필을 만들어 보세요." />
              <Description text="자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다." />
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>
    </Box>
  );
};

export default Features;
