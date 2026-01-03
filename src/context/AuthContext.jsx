import { Children, createContext, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({Children}) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        if(email === "admin@gmail.com" && password === "admin1234") {
            setUser({ role: "admin"});
            return "admin";
        }
        if(email === "customer@gmail.com" && password === "customer1234") {
            setUser({ role: "customer"});
            return "customer";
        }
        return null;
    };
    const logout = () => setUser(null);
    return (
        <AuthContext.Provider value={{user, login, logout}}>
        {Children}
        </AuthContext.Provider>
    );
};