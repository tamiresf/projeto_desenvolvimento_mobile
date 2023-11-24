import React from "react";
import AuthProvider from "./src/contexts/AuthContext";
import Rotas from "./src/routes";
import OfflineNotice from "./src/components/NetInfo";

export default function App() {
  return (
    <AuthProvider>
      <Rotas/>
      <OfflineNotice/>
    </AuthProvider>
    
        
          

          
  );
}
