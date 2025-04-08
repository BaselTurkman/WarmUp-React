import { Box, Button } from "@mui/material";

export default function ActionButtons() {
  return (
    <Box display="flex" justifyContent="space-between" mt={2}>
      <Button variant="outlined">Cancel</Button>
      <Button variant="contained" color="primary">
        Save
      </Button>
    </Box>
  );
}
