import { signInWithPopup } from "firebase/auth";
import { FC } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useAuth, useUser } from "reactfire";
import { googleProvider } from "../../../lib/app/firebase.ts";

interface NavbarProps {}
export const Navbar: FC<NavbarProps> = ({}) => {
    const auth = useAuth();
    const loginWithGoogle = async () => {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
    };

    const { data: user, status } = useUser();

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
                {status === "loading" && <span>Loading...</span>}

                {status !== "loading" && !user && (
                    <button className="btn btn-outline btn-sm" onClick={loginWithGoogle}>
                        Log in with Google
                    </button>
                )}
                {status !== "loading" && user && (
                    <>
                        <span>Logged in as {user.displayName}</span>
                        <button className="btn btn-outline btn-sm" onClick={() => auth.signOut()}>
                            Logout
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};
