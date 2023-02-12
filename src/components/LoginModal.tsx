import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  TextField,
  Button,
  FormHelperText,
  FormControl,
  InputAdornment,
  Grid,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "#0C0C0D",
  border: "2px solid #000",
  boxShadow: 24,
  p: 6,
};

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto#B3B3B3",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#B3B3B3",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#B3B3B3",
  },
});

// Inspired by blueprintjs
function BpCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        p: 0,
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

interface LoginModalProps {
  open: boolean;
  closeModal: () => void;
}

const LoginModal = ({ open, closeModal }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Modal
      open={open}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 4 }}
          color="common.white"
        >
          로그인
        </Typography>
        <Grid sx={{ mb: 2 }}>
          <form>
            <FormControl sx={{ mb: 2 }} fullWidth>
              <TextField
                id="email"
                type="email"
                name="email"
                label="이메일 주소 또는 전화번호"
                variant="filled"
              />
              <FormHelperText>
                정확한 이메일 주소나 전화번호를 입력하세요.
              </FormHelperText>
            </FormControl>
            <FormControl sx={{ mb: 4 }} fullWidth>
              <TextField
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                label="비밀번호"
                variant="filled"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "HIDE" : "SHOW"}
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
              <FormHelperText>
                비밀번호는 4~60자 사이여야 합니다.
              </FormHelperText>
            </FormControl>
            <Button type="submit" variant="contained" size="large" fullWidth>
              Sign in
            </Button>
          </form>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Box alignItems="center">
            <BpCheckbox />
            <Typography variant="caption" color="#B3B3B3" sx={{ ml: 1 }}>
              로그인 정보 저장
            </Typography>
          </Box>
          <Typography
            variant="caption"
            component="a"
            href="#"
            color="#B3B3B3"
            sx={{ lineHeight: 0 }}
          >
            도움이 필요하신가요?
          </Typography>
        </Grid>
        <Grid container alignItems="center" sx={{ mb: 5 }}>
          <Image
            src="/images/facebook.png"
            width={20}
            height={20}
            layout="fixed"
            alt="Facebook Login"
          />
          <Typography
            variant="caption"
            component="a"
            href="#"
            sx={{ ml: 1 }}
            color="#B3B3B3"
          >
            페이스북 로그인
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="body1" component="span" color="#B3B3B3">
            Netflix 회원이 아닌가요?
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="#"
            color="common.white"
          >
            &nbsp; 지금 가입하세요.
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="caption" color="#B3B3B3">
            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
            확인합니다.
          </Typography>
          <Typography variant="caption" color="#005FB0" component="a" href="#">
            자세히 알아보기.
          </Typography>
        </Grid>
      </Box>
    </Modal>
  );
};

export default LoginModal;
