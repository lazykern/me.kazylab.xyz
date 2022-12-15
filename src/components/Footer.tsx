import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "50px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--background)",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "var(--text-disabled)",
        }}
      >
        © 2022 Phusit Somboonyingsuk
      </Typography>
    </Box>
  );
}
