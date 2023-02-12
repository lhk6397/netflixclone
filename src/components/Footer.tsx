import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Select,
  MenuItem,
} from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "common.black", color: "grey.700" }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Stack spacing={4}>
          <Typography>질문이 있으신가요? 문의 전화: 080-001-9587</Typography>
          <Container maxWidth={false} disableGutters>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="body1" component="a" href="#">
                    자주 묻는 질문
                  </Typography>
                  <Typography variant="body1" component="a" href="#">
                    미디어센터
                  </Typography>
                  <Typography variant="body1" component="a" href="#">
                    이용약관
                  </Typography>
                  <Typography variant="body1" component="a" href="#">
                    문의하기
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="body1" component="a" href="#">
                    기프트카드 약관
                  </Typography>
                  <Typography variant="body1" component="a" href="#">
                    투자정보(IR)
                  </Typography>
                  <Typography variant="body1" component="a" href="#">
                    개인정보 처리방침
                  </Typography>
                  <Typography variant="body1" component="a" href="#">
                    속도 테스트
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="body1" component="a" href="#">
                    고객센터
                  </Typography>
                  <Typography variant="body1" component="a" href="#">
                    입사정보
                  </Typography>
                  <Typography variant="body1" component="a" href="#">
                    쿠키 설정
                  </Typography>
                  <Typography variant="body1" component="a" href="#">
                    법적 고지
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="body1" component="a" href="#">
                    계정
                  </Typography>
                  <Typography variant="body1" component="a" href="#">
                    넷플릭스 지원 디바이스
                  </Typography>
                  <Typography variant="body1" component="a" href="#">
                    회사 정보
                  </Typography>
                  <Typography variant="body1" component="a" href="#">
                    오직 넷플릭스에서
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Container>
          <Box>
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
          </Box>
          <Typography variant="body1">넷플릭스 대한민국</Typography>

          <Box>
            <Typography variant="body1">
              넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
              제2018-서울종로-0426호 전화번호: 080-001-9587
            </Typography>
            <Typography variant="body1">대표: 레지널드 숀 톰프슨</Typography>
            <Typography variant="body1">
              이메일 주소: korea@netflix.com
            </Typography>
            <Typography variant="body1">
              주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동
              20층 우편번호 03161
            </Typography>
            <Typography variant="body1">
              사업자등록번호: 165-87-00119
            </Typography>
            <Typography variant="body1">
              클라우드 호스팅: Amazon Web Services Inc.
            </Typography>
            <Typography variant="body1">공정거래위원회 웹사이트</Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
