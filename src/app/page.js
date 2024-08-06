import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Screen({ children }) {
  return (
    <Box 
      width="80vw" 
      height="90vh" 
      position="relative" 
      top="5vh" 
      left="10vw"
    >
      { children }
    </Box>
  );
}

function Pantry({ children }) {
  return (
    <Stack
      width="100%"
      height="80%"
      position="relative"
      display="flex"
      flexDirection="column"
      overflow="auto"
      gap="1vh"
      bgcolor="red"
    >
      { children }
    </Stack>
  );
}

function Item({ children }) {
  return (
  <Box
    width="100%"
    height="50px"
    display="flex"
    alignItems="center"
    border={1}
    borderRadius={2}
    bgcolor="lightgrey"
    flexShrink={0}
  >
    { children }
  </Box>
  );
}

export default function Home() {
  return (
    <Box height="100vh">
      <Screen>
        <Box width="100%" height="10%" borderRadius={5} bgcolor="purple" display="flex" justifyContent="center" alignItems="center">
          Pantry Tracker
        </Box>
        <Box width="100%" height="10%">
          <Button bgcolor="brown" width="50px" height="50px" borderRadius="50%">Wow</Button>
        </Box>
        <Pantry>
          <Item>Item 1</Item>
          <Item>Item 1</Item>
        </Pantry>
      </Screen>
    </Box>
    // <Box display="flex" justifyContent="center">
    //   <Stack spacing={2}>
    //     <Item>Item 1</Item>
    //     <Item>Item 2</Item>
    //     <Item>Item 3</Item>
    //   </Stack>
    // </Box>
  );
}