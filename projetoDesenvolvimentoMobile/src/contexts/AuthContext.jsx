import React, { createContext, useState, useEffect } from "react";
import { conta } from "../service/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [listaUser, setListaUser] = useState([]);
  const [user, setUser] = useState(null);
  // const navigation2 = useNavigation();
  // const navigation3 = useNavigation();

  const getUser = async () => {
    try {
      const response = await conta.get("/conta");
      setListaUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  

  const signin = (email, senha) => {
    
    const foundUser = listaUser.find((usuario) => usuario.email === email);

    if (foundUser) {
        if (foundUser.senha === senha) {
        //   navigation.navigate("MainApp", { screen: "Produtos" });
          setUser({email: foundUser.email, senha: foundUser.senha, role: foundUser.role})
        } else {
          alert("Senha incorreta");
        }
      } else {
        alert("Usuário ou senha não encontrado");
      }
    
  };

  const logout = () => {
    setUser(null);
  };

  const verificaNivelAcesso = (permissao) => {
    if (user.role == permissao) return true;
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, signin, logout, verificaNivelAcesso }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
