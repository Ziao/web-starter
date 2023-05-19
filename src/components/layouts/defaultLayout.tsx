import { FC, PropsWithChildren } from "react";
import { Navbar } from "../navigation/navbar/navbar.tsx";

interface DefaultLayoutProps extends PropsWithChildren {}
export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};
