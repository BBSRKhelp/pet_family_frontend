import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import { t } from "../../../shared/lib/locales";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { AccountsService } from "../../../shared/api/accounts";

export function RegistrationForm() {
  //TODO переделать
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  type RegistrationFields = {
    email: string;
    password: string;
    repeatPassword: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegistrationFields>();

  const password = watch("password");

  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: RegistrationFields) => {
    if (data.password !== data.repeatPassword) {
      return;
    }

    try {
      setIsLoading(true);
      const response = await AccountsService.registerAsync(
        data.email,
        data.password
      );
      setAccessToken(response.data.result!.accessToken);
      setRefreshToken(response.data.result!.refreshToken);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      setIsError(true);
      console.log("error");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <Box className="flex flex-col h-full w-full py-6 px-10 items-start justify-center gap-4 relative">
      <NavLink
        to="/"
        className="text-xl text-main-color font-mono absolute top-6"
      >
        {t("main.registration.return")}
      </NavLink>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-auto items-center gap-9 shadow-2xl rounded-2xl py-10 px-15"
      >
        <Typography variant="h5" fontWeight={600}>
          {t("main.registration.registration")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
          }}
        >
          <Box display="flex" flexDirection="column">
            <Box className="label text-gray-500 mb-1">
              {t("main.registration.email")}
            </Box>
            <TextField
              fullWidth
              size="small"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message || " "}
              {...register("email", {
                required: "Почта обязательна",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Почта некорректна",
                },
              })}
              sx={{
                "& .MuiFormHelperText-root": { margin: 0, lineHeight: "1.2" },
                "& .MuiOutlinedInput-root": {
                  color: "grey",
                  height: "2rem",
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f77070",
                  },
                },
              }}
            />
          </Box>

          <Box display="flex" flexDirection="column">
            <Box className="label text-gray-500 mb-1">
              {t("main.registration.password")}
            </Box>
            <TextField
              fullWidth
              size="small"
              type={isPasswordVisible ? "text" : "password"}
              error={!!errors.password}
              helperText={errors.password?.message || " "}
              {...register("password", {
                required: "Пароль обязателен",
                validate: {
                  minLength: (value) =>
                    value.length >= 6 || "Минимум 6 символов",
                },
              })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      edge="end"
                    >
                      {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiFormHelperText-root": { margin: 0, lineHeight: "1.2" },
                "& .MuiOutlinedInput-root": {
                  color: "grey",
                  height: "2rem",
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f77070",
                  },
                },
              }}
            />
          </Box>

          <Box display="flex" flexDirection="column">
            <Box className="label text-gray-500 mb-1">
              {t("main.registration.repeatPassword")}
            </Box>
            <TextField
              fullWidth
              size="small"
              type={isPasswordVisible ? "text" : "password"}
              error={!!errors.repeatPassword}
              helperText={errors.repeatPassword?.message || " "}
              {...register("repeatPassword", {
                required: "Повторите пароль",
                validate: {
                  matches: (value) =>
                    value === password || "Пароли не совпадают",
                },
              })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      edge="end"
                    >
                      {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiFormHelperText-root": { margin: 0, lineHeight: "1.2" },
                "& .MuiOutlinedInput-root": {
                  color: "grey",
                  height: "2rem",
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f77070",
                  },
                },
              }}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, width: "80%", mx: "auto", backgroundColor: "#f77070" }}
          >
            {t("main.registration.register")}
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#808080" }}>
            {t("main.registration.isLogin")}
          </Typography>
          <NavLink to="/login" style={{ color: "#f77070" }}>
            {t("main.registration.login")}
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
}
