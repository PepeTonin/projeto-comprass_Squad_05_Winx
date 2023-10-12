import NonAuthCheckoutRoutes from "./NonAuthCheckoutRoutes";
import AuthCheckoutRoutes from "./AuthCheckoutRoutes";


export default function VerifyAuthForCheckout() {
  let isAuthenticated = true;

  return (
    <>
      {isAuthenticated && <AuthCheckoutRoutes />}
      {!isAuthenticated && <NonAuthCheckoutRoutes />}
    </>
  );
}
