import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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
      flexDirection="column"
      gap="1vh"
      overflow="auto" 
    >
      { children }
    </Box>
  );
}

function Checklist() {

}

export default function Home() {
  return (
    <Box height="100vh">
      <Screen>
        <Item>Item 1</Item>
        <Item>Item 1</Item>
        <Item>Item 1</Item>
        <Item>Item 1</Item>
        <Item>Item 1</Item>
        <Item>Item 1</Item>
        <Item>Item 1</Item>
        <Item>Item 1</Item>
        <Item>Item 1</Item>
        <Item>Item 1</Item>
        <Item>Item 1</Item>
        <Item>Item 1</Item>
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