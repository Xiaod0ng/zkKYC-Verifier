import {
  Box,
  Container,
  Flex,
  Heading,
  Button,
  Card,
  Center,
  VStack,
  ButtonGroup,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";

function DummyBank() {
  return (
    <div id="dummyBank">
      <Box background="black" color="white" py={4}>
        <Container maxW={"80%"}>
          <Flex justifyContent="space-between">
            <Heading>XD Bank</Heading>
            <ButtonGroup>
              <Button colorScheme="purple">Login</Button>
              <Button colorScheme="whiteAlpha">Register</Button>
            </ButtonGroup>
          </Flex>
        </Container>
      </Box>

      <Box py={4}>
        <Container maxW={"80%"}>
          <Grid
            templateColumns="repeat(5, 1fr)"
            gap={1}
            fontWeight={"bold"}
            fontSize={"xl"}
          >
            <GridItem>
              <Center>Banking</Center>
            </GridItem>
            <GridItem>
              <Center>Investments</Center>
            </GridItem>
            <GridItem>
              <Center>Cards</Center>
            </GridItem>
            <GridItem>
              <Center>Loans</Center>
            </GridItem>
            <GridItem>
              <Center>Insurance</Center>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Box>
        <Container maxW={"80%"} py={4}>
          <div>
            <Card my={4} p={4}>
              <Center>
                <Heading>Welcome to XD Bank</Heading>
              </Center>
            </Card>
            <Card my={4} p={4}>
              <Text fontWeight="bold" fontSize="xl">
                Be careful of malware scams.
              </Text>
              <p>
                Stay alert of special offers on social media or via messages and
                avoid opening links or downloading apps from these sources.
                Please don’t enter your account details, passwords or personal
                info into such fake links or apps as fraudsters may take control
                of your phone. For security reasons, we have temporarily
                disabled screen capture and recording functions on Android
                devices until further notice. Please use the Save Image button
                in the app's Transfer & Pay function or capture screen on SMS or
                email we send you to save transaction records.
              </p>
            </Card>
          </div>
        </Container>
      </Box>
    </div>
  );
}

export default DummyBank;
