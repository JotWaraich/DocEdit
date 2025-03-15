import { AuthContextProvider } from "../../firebase/auth";

const Layout = ({ children }) => {
    return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Layout;