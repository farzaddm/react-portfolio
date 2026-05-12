import {Box, Typography} from "@mui/material";

const DevInfo = ({ icon: Icon, children }) => {
  const [label, value] = children.split(": ");

  return (
      <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        py: 1.5,
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}>
        <Icon sx={{color: "text.primary"}}/>
        <Typography variant="body1" color="text.primary">
          <span style={{ fontWeight: "bold" }}>{label}:</span>{" "}
          <span style={{ fontWeight: "normal" }}>{value}</span>
        </Typography>
      </Box>
  );
};

export default DevInfo;