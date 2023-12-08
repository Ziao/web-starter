import { Box, Button, Container, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {}
export const Navbar: FC<NavbarProps> = ({}) => {
    return (
        <Box background={"white"} pos={"sticky"} top={0} zIndex={20} shadow={"sm"}>
            <Container>
                <HStack height={16}>
                    <Text fontWeight={"bold"} mr={4}>
                        Web starter
                    </Text>
                    <Link to={"/"}>
                        <Button>Home</Button>
                    </Link>

                    <Link to={"/"}>
                        <Button>About</Button>
                    </Link>
                </HStack>
            </Container>
        </Box>
    );
};
