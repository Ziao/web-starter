import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { FC } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

interface NavbarProps {}
export const Navbar: FC<NavbarProps> = ({}) => {
    const { login, register, logout, user, isAuthenticated, isLoading } = useKindeAuth();

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
                <div className="grow"></div>
                {isLoading && <span>Loading...</span>}

                {/*User profile and picture */}
                {isAuthenticated && user && (
                    <>
                        <div className="flex items-center gap-1">
                            {user.picture && (
                                <div className="avatar">
                                    <div className="w-8 mask mask-squircle">
                                        <img src={user.picture} alt={user.given_name ?? "Profile picture"} />
                                    </div>
                                </div>
                            )}
                            <span className="ml-2">{user.given_name}</span>
                        </div>
                        <button className="btn btn-outline btn-sm" onClick={() => logout()}>
                            Logout
                        </button>
                    </>
                )}

                {!isAuthenticated && (
                    <>
                        <button className="btn btn-outline btn-sm" onClick={() => login({})}>
                            Login
                        </button>
                        <button className="btn btn-outline btn-sm" onClick={() => register({})}>
                            Register
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};
