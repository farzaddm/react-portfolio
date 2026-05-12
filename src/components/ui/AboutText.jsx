import {Box, Typography} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import {FormatQuoteRounded} from "@mui/icons-material";


const AboutText = ({ children }) => {
  return (
      <Box sx={{ mt: 5, mb: 4, position: "relative" }}>
        <FormatQuoteRounded
            sx={{
              position: "absolute",
              top: -20,
              left: -10,
              fontSize: 60,
              color: "rgba(25, 118, 210, 0.1)",
              transform: "rotate(180deg)"
            }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
          <PersonIcon />
          <Typography variant="h5" fontWeight="bold">
            درباره من
          </Typography>
        </Box>
        <Typography
            variant="body1"
            sx={{
              lineHeight: 2,
              fontSize: "1.05rem",
              color: "text.secondary",
              fontStyle: "italic",
              px: 3
            }}
        >
          {children}
        </Typography>
      </Box>
  );
};

export default AboutText;