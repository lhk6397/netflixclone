import BorderedBottomBox from "../wrapper/BorderBottomBox";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const CustomAccordian = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
}));

const CustomAccordianSummary = styled(AccordionSummary)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.common.black}`,
  padding: theme.spacing(1, 3), // 25px 40px
  "& .Mui-expanded": {
    padding: theme.spacing(0, 3),
  },
}));

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <BorderedBottomBox>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h3"
          component="h3"
          color="common.white"
          align="center"
          sx={{ mb: 6 }}
        >
          자주 묻는 질문
        </Typography>
        <Stack spacing={1} mb={8}>
          <CustomAccordian
            square
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <CustomAccordianSummary
              expandIcon={
                <AddIcon sx={{ color: "common.white", fontSize: 48 }} />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant="h5">Netflix란 무엇인가요?</Typography>
            </CustomAccordianSummary>
            <AccordionDetails>
              <Typography variant="h5" sx={{ mb: 4 }}>
                넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션,
                다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의
                디바이스에서 시청할 수 있는 스트리밍 서비스입니다.
              </Typography>
              <Typography variant="h5">
                저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다.
                무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가
                제공됩니다.
              </Typography>
            </AccordionDetails>
          </CustomAccordian>
          <CustomAccordian
            square
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <CustomAccordianSummary
              expandIcon={
                <AddIcon sx={{ color: "common.white", fontSize: 48 }} />
              }
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography variant="h5">Netflix 요긍은 얼마인가요?</Typography>
            </CustomAccordianSummary>
            <AccordionDetails>
              <Typography variant="h5">
                스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한
                디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십
                요금은 월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나
                약정이 없습니다.
              </Typography>
            </AccordionDetails>
          </CustomAccordian>
          <CustomAccordian
            square
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <CustomAccordianSummary
              expandIcon={
                <AddIcon sx={{ color: "common.white", fontSize: 48 }} />
              }
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography variant="h5">
                광고형 베이식은 뭐가 다른가요?
              </Typography>
            </CustomAccordianSummary>
            <AccordionDetails>
              <Typography variant="h5">
                광고형 베이식은 저렴한 요금으로 영화와 시리즈를 즐길 수 있는
                방법입니다. 제한된 수의 중간 광고와 함께 다양한 디바이스에서
                좋아하는 콘텐츠를 스트리밍할 수 있습니다. 저장 기능은 지원되지
                않으며, 라이선스 제한으로 인해 일부 영화와 시리즈를 이용할 수
                없습니다. 또한 일부 위치 및 디바이스 제한도 적용됩니다. 자세히
                알아보기.
              </Typography>
            </AccordionDetails>
          </CustomAccordian>
          <CustomAccordian
            square
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <CustomAccordianSummary
              expandIcon={
                <AddIcon sx={{ color: "common.white", fontSize: 48 }} />
              }
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography variant="h5">어디에서 시청할 수 있나요?</Typography>
            </CustomAccordianSummary>
            <AccordionDetails>
              <Typography variant="h5" sx={{ mb: 4 }}>
                언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면
                PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이
                연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV,
                스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도
                언제든지 시청할 수 있습니다.
              </Typography>
              <Typography variant="h5">
                iOS, Android, Windows 10용 앱에서는 좋아하는 시리즈를 저장할
                수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수
                없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.
              </Typography>
            </AccordionDetails>
          </CustomAccordian>
          <CustomAccordian
            square
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <CustomAccordianSummary
              expandIcon={
                <AddIcon sx={{ color: "common.white", fontSize: 48 }} />
              }
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography variant="h5">
                멤버십을 해지하려면 어떻게 하나요?
              </Typography>
            </CustomAccordianSummary>
            <AccordionDetails>
              <Typography variant="h5">
                넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도
                없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수
                있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나
                종료하세요.
              </Typography>
            </AccordionDetails>
          </CustomAccordian>
          <CustomAccordian
            square
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <CustomAccordianSummary
              expandIcon={
                <AddIcon sx={{ color: "common.white", fontSize: 48 }} />
              }
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography variant="h5">
                Netflix에서 어떤 콘텐츠를 시청할 수 있나요?
              </Typography>
            </CustomAccordianSummary>
            <AccordionDetails>
              <Typography variant="h5">
                넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을
                수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다.
                마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하세요.
              </Typography>
            </AccordionDetails>
          </CustomAccordian>
          <CustomAccordian
            square
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <CustomAccordianSummary
              expandIcon={
                <AddIcon sx={{ color: "common.white", fontSize: 48 }} />
              }
              aria-controls="panel7bh-content"
              id="panel7bh-header"
            >
              <Typography variant="h5">
                아이들이 Netflix를 봐도 좋을까요?
              </Typography>
            </CustomAccordianSummary>
            <AccordionDetails>
              <Typography variant="h5" sx={{ mb: 4 }}>
                멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의
                공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할
                수 있습니다.
              </Typography>
              <Typography variant="h5">
                키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어,
                자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을
                원치 않는 특정 작품을 차단할 수도 있습니다.
              </Typography>
            </AccordionDetails>
          </CustomAccordian>
        </Stack>

        <Typography
          variant="h6"
          component="p"
          color="common.white"
          textAlign="center"
          sx={{ my: 3 }}
        >
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
          입력하세요.
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
                borderRadius: 2,
              }}
            />
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ height: "100%", borderRadius: "2px" }}
            >
              시작하기 &gt;
            </Button>
          </Grid>
        </Grid>
      </Container>
    </BorderedBottomBox>
  );
};

export default FAQ;
