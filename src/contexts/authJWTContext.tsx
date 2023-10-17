import React, { ReactNode, createContext, useState } from "react";

interface AuthJWTContextType {
  token: string;
  tokenReceived: boolean;
  id: string;
  receiveToken: (data: string) => void;
  deleteToken: () => void;
  getId: (data: string) => void;
}

export const TokenContext = createContext<AuthJWTContextType>(
  {} as AuthJWTContextType
);

interface AuthProviderProps {
  children: ReactNode;
}

function TokenProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState("");
  const [tokenReceived, setTokenReceived] = useState(false);
  const [id, setId] = useState("");

  function receiveToken(data: string) {
    setToken(data);
    if (data !== "" && data.trim() !== "") {
      setTokenReceived(true);
    }
  }

  function deleteToken() {
    setToken("");
    setTokenReceived(false);
  }

  function getId(data: string) {
    setId(data);
  }

  const contextValue: AuthJWTContextType = {
    token,
    tokenReceived,
    id,
    receiveToken,
    deleteToken,
    getId,
  };

  return (
    <TokenContext.Provider value={contextValue}>
      {children}
    </TokenContext.Provider>
  );
}

export default TokenProvider;
