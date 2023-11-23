import React from "react";
import AuthProvider from "./src/contexts/AuthContext";
import Rotas from "./src/routes";

export default function App() {
  return (
    <AuthProvider>
      <Rotas/>
    </AuthProvider>
    
        
          

          
  );
}
