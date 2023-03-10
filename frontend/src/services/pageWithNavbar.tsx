import { ElementType } from "react";
import NavBar from "../components/Navbar";

export default (Page: ElementType) => {
    return () => (
        <>
            <NavBar />
            <Page />
        </>
    )
};
