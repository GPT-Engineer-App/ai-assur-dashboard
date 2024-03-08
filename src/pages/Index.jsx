import React, { useState } from "react";
import { ChakraProvider, Box, VStack, Grid, theme, Button, Input, FormControl, FormLabel, useToast, Heading, Text, Flex, Spacer } from "@chakra-ui/react";
import { FaSignInAlt, FaRegListAlt, FaShieldAlt } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = async () => {
    // Perform login request here
    // Sample response to simulate login
    const response = {
      status: 200,
      data: {
        accessToken: "mock-access-token",
      },
    };

    if (response.status === 200) {
      localStorage.setItem("accessToken", response.data.accessToken);
      setIsLoggedIn(true);
      toast({
        title: "Login successful.",
        description: "You've successfully logged in.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Login failed.",
        description: "The credentials you've entered are incorrect.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (isLoggedIn) {
    return (
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
              <Heading>AI Assur Dashboard</Heading>
              <Flex direction="row" width="100%">
                <Box p={4} borderWidth="1px" borderRadius="lg">
                  <VStack>
                    <Button leftIcon={<FaRegListAlt />} colorScheme="teal" variant="solid">
                      Manage Tenders
                    </Button>
                    <Button leftIcon={<FaShieldAlt />} colorScheme="teal" variant="solid">
                      Manage Policies
                    </Button>
                  </VStack>
                </Box>
                <Spacer />
                <Box p={4} borderWidth="1px" borderRadius="lg">
                  <Text fontSize="2xl">Welcome to AI Assur</Text>
                  <Text mt={4}>Manage and assess your tenders and risks efficiently using the power of AI.</Text>
                </Box>
              </Flex>
            </VStack>
          </Grid>
        </Box>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Heading>AI Assur Login</Heading>
            <Box minW={{ base: "90%", md: "468px" }}>
              <form>
                <VStack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </FormControl>
                  <Button width="full" mt={4} colorScheme="teal" leftIcon={<FaSignInAlt />} onClick={handleLogin}>
                    Sign In
                  </Button>
                </VStack>
              </form>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
