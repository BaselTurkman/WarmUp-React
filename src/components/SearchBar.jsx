import { TextField, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <SearchIcon />
      <TextField
        fullWidth
        id="input-with-sx"
        label="Find Members"
        variant="standard"
      />
    </Box>
  );
}
