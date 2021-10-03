import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Sidebar } from './components/Sidebar/Sidebar';
import SidebarTemporary from './components/SidebarTemporary';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <Box className="App">
      <Topbar />
      <Grid container>
        <Grid xs={2}>
          <SidebarTemporary />
        </Grid>
        <Grid xs={10}>
          other pages
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
