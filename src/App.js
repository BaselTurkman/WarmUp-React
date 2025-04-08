import './App.css';
import Members from './components/Members';
import {Box} from "@mui/material";


function App() {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <Members />
  </Box>
  );
}

export default App;
