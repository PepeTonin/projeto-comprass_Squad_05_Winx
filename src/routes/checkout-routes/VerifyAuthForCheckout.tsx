import React, { useContext } from 'react'
import NonAuthCheckoutRoutes from "./NonAuthCheckoutRoutes";
import AuthCheckoutRoutes from "./AuthCheckoutRoutes";
import { TokenContext } from '../../contexts/authJWTContext';

export default function VerifyAuthForCheckout() {
  const { tokenReceived } = useContext(TokenContext)
  let isAuthenticated = tokenReceived;

  return (
    <>
      {isAuthenticated && <AuthCheckoutRoutes />}
      {!isAuthenticated && <NonAuthCheckoutRoutes />}
    </>
  );
}
