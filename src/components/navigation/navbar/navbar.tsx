import { FC } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

interface NavbarProps {}
export const Navbar: FC<NavbarProps> = ({}) => {
    return (
        <div className="Navbar">
            <div className="container">
                <strong className="mr-8">Web starter</strong>
                <Link to={"/"} className="link link-neutral">
                    Home
                </Link>
                <Link to={"/"} className="link link-neutral">
                    About
                </Link>
            </div>
        </div>
    );
};
