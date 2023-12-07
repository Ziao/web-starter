import { Container, Stack } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../navigation/navbar/navbar.tsx";

interface DefaultLayoutProps extends PropsWithChildren {}
export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <Stack minH={"100dvh"} background={"gray.100"} gap={8}>
            <Navbar />
            <Container flexGrow={1} maxW={"container.xl"} pos={"relative"} zIndex={10}>
                {children}
            </Container>
        </Stack>
    );
};
