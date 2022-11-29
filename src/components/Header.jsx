import { Box, Button, Center, Image, Text } from "@chakra-ui/react";

const Header = () => (
  <Box>
    <Box position="absolute" w="100%" h="60vh">
      <Center>
        <Image
          src="https://cdn.pixabay.com/photo/2021/10/05/04/45/sunset-6681770_960_720.jpg"
          alt=""
          boxSize="100%"
          objectFit="center"
          h="50vh"
          w="90vw"
          p="50px"
        />
      </Center>
    </Box>
    <Box position="relative" top="220px" >
        <Center>
        <Text fontSize='4xl'color="#ffffff">DOMINA EL TERRENO</Text>
        </Center>
      <Center gap="10px" >
        <Button colorScheme='teal' variant='outline'>VER DETALLES</Button>
        <Button colorScheme='teal' variant='outline'>VER VIDEO</Button>
      </Center>
    </Box>
    <Box position="absolute" top="450" w="100%" h="auto" ml="97px">
        <Image
          src="https://cdn.pixabay.com/photo/2021/10/05/04/45/sunset-6681770_960_720.jpg"
          alt=""
          boxSize="100%"
          objectFit="center"
          h="50vh"
          w="30vw"
          p="50px"
          />
    </Box>
    <Box position="relative" top="520" ml="210" w="20%">

        <Text fontSize='4xl'color="#ffffff">DOMINA EL TERRENO</Text>
        <Center mr="30" display="flex" flexDirection="column" gap="5" >
        <Button colorScheme='teal' variant='outline' w="100%">VER DETALLES</Button>
        <Button colorScheme='teal' variant='outline' w="100%">VER VIDEO</Button>
        </Center>
    </Box>
  </Box>
);
export default Header;
