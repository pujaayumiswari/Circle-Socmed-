import { Box, Button, Center, Container, Input, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useRegister } from "../features/auth/hooks/useRegister";

export default function Register() {
  const { handleChange, handleRegister } = useRegister();

  return (
    <>
      <Container alignContent="center" mt="10" mb={'10'}>
        <Stack spacing={3}>
        <Center textAlign={'center'}>
            <Text fontSize="40px" fontWeight="bold" color="#04a51e">
              BAX
              <br />
              Socialize
            </Text>
          </Center>
          <Text fontSize="20px">Create account <br/><b><em>BAX-Social</em></b></Text>
          <Input
            onChange={handleChange}
            name="full_name"
            variant="outline"
            placeholder="Full name*"
          />
          <Input
            onChange={handleChange}
            name="username"
            variant="outline"
            placeholder="Username*"
          />
          <Input
            onChange={handleChange}
            name="email"
            variant="outline"
            placeholder="Email*"
          />
          <Input
            onChange={handleChange}
            name="password"
            variant="outline"
            placeholder="Password*"
          />
          <Button onClick={handleRegister} borderRadius={50} bgColor="#04a51e">
            Create
          </Button>
          <Box display="flex" gap="5px" justifyContent="left">
            <Text>Already have account?</Text>
            <Text color="#04a51e">
              <Link to="/login">login</Link>
            </Text>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
