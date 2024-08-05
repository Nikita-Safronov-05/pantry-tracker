import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

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

function Screen({ children }) {
  return (
    <Box 
      width="80vw" 
      height="75vh" 
      position="relative" 
      top="20vh" 
      left="10vw" 
      display="flex"
      gap="2vh"
    >
      { children }
    </Box>
  );
}

function Pantry({ children }) {
  return (
    <Stack
      width="45%"
      height="100%"
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
function Checklist() {

}

export default function Home() {
  return (
    <Box height="100vh">
      <Screen>
        <Pantry>
          <Item>Item 1</Item>
          <Item>Item 1</Item>
          <Item>Item 1</Item>
          <Item>Item 1</Item>
          <Item>Item 1</Item>
          <Item>Item 1</Item>
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