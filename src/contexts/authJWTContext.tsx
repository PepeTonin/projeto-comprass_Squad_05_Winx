import React, { ReactNode, createContext, useState } from "react";

interface AuthJWTContextType {
  token: string;
  tokenReceived: boolean;
  receiveToken: (data: string) => void;
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

  function receiveToken(data: string) {
    setToken(data);
    if (data !== "" && data.trim() !== "") {
      setTokenReceived(true);
    }
  }

  const contextValue: AuthJWTContextType = {
    token,
    tokenReceived,
    receiveToken,
  };

  return (
    <TokenContext.Provider value={contextValue}>
      {children}
    </TokenContext.Provider>
  );
}

export default TokenProvider;
