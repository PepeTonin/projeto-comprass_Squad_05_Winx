# Project Comprass Squad 05 (Winx) 

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)

**Project Overview:** 

The "Comprass" project is a mobile shopping application that allows users to browse, select, and purchase products in various categories. The app provides authentication, product selection, checkout, and user profile information features. In this documentation, we will detail the key components and functionalities of the application up to this point.

---

**Team members:**

- Pedro Henrique de Ávila Tonin
- Guilherme Novais Lima Pereira
 - Jhimy Kenedy Sousa Ferrari
- Maria Luisa Miranda Fróes

---

**Technologies Used:**

- React Native;
- Expo;
- React Navigation;
- Async Storage;
- React Hook Form;
- Context API;
- React Native Vector Icons;
- React Native Elements;
- Jest and React Testing Library;
- Expo Async Storage;
- React Native Paper.

---

**Installation of the Project:**

- Ensure you have Node.js and the npm (or Yarn) package manager installed on your system. You can download them from nodejs.org.
- Install the Expo CLI.
- Clone the repository.
- Install dependencies (npm install).
- Start the project (expo start).

---

**Using the Project:**

The app offers the following main features:

- Navigation: Use the bottom navigation bar on the screen to switch between different screens, such as the home screen, shopping cart, and user profile.
- Shopping: When viewing a product, you can add items to your shopping cart. Access the cart to view added items and proceed with checkout.
- Authentication: If you are authenticated, you have access to additional features, such as an enhanced checkout process. You can log in and log out from the user profile.
- Styling: The app maintains consistent styling throughout the user interface, ensuring a pleasant visual experience.

---

**Folder Structure:**

- __tests__
- .expo
- .vscode
  - .expo
- .coverage
  - Icon-report
- .src
  - .assets
    - app-images
    - fonts
  - .components
    - EndBlankSlipPayment
    - EndCartPayment
    - EndPixPayment
    - home-screen
    - product-details
    - shared
  - .contexts
  - .routes
    - checkout-routes
  - .screens
    - AddShippingAddress
    - Cart
    - ForgotPassword
    - Home
    - LoggedCheckout
    - Login
    - NotLoggedCheckout
    - ProductDetails
    - Profile
    - SignUp
    - Splash
    - SuccessEnd
    - SuccessContinue
  - .styles
  - .util

The project is organized into various folders to improve code clarity and maintenance. Here's an overview of the folders in the project:

tests: This folder may contain automated tests for the app's code. Tests ensure that the app functions as expected and help identify potential issues.

.expo: The .expo folder is used to store Expo-specific configurations, such as build settings and project metadata.

.vscode: This folder contains Visual Studio Code-specific configurations for the project. This may include debugging settings and recommended extensions.

.coverage: The "coverage" folder typically contains information related to code test coverage, including reports.

Icon-report: This subfolder possibly contains code coverage information in report format.

src: The "src" folder is the main source code directory of the app. It contains several essential folders for the app's operation.

assets: The "assets" folder contains static assets, such as images and fonts, used in the app.
	app-images: Images used in the app are stored in this subfolder.
	fonts: Custom app fonts can be placed here.

components: The "components" folder contains reusable components used in various parts of the app. Subfolders organize components based on their specific functionalities.

EndBlankSlipPayment: Components related to payment via bank slip.
EndCartPayment: Components related to payment in the shopping cart.
EndPixPayment: Components related to payment via Pix.
home-screen: Components specific to the home screen.
product-details: Components specific to the product details screen.
shared: Shared components that can be used in various parts of the app, promoting code reuse and design consistency.

contexts: The "contexts" folder contains files related to state management and app contexts.

routes: The "routes" folder contains files that define app navigation routes. Routes are organized into subfolders for readability and organization.

checkout-routes: Contains routes related to the checkout process.

screens: The "screens" folder contains app screen components organized into subfolders based on their functionality.

AddShippingAddress: Components related to adding shipping addresses.
Cart: Components related to the shopping cart.
ForgotPassword: Components related to password recovery.
Home: Components for the home screen.
LoggedCheckout: Components related to the checkout process when the user is authenticated.
Login: Components related to the login process.
NotLoggedCheckout: Components related to the checkout process when the user is not authenticated.
ProductDetails: Components related to the product details screen.
Profile: Components related to the user profile.
SignUp: Components related to the registration process.
Splash: Components for the startup screen.
SuccessEnd: Components related to the completion of a process, such as payment.
SuccessContinue: Components related to continuing after a successful step.

styles: The "styles" folder contains files related to app styling, such as color definitions, fonts, and font sizes.

util: This folder may contain utilities and general-purpose functions used throughout the app.

---

**Components:**

"Login.tsx" Component

Description: The "Login.tsx" component is responsible for the app's login screen. It allows users to enter their email and password credentials to access their accounts. Key Features: Email input field, password input field, input validation, login button, navigation to the registration screen, navigation to the password reset screen.

"SignUp.tsx" Component

Description: The "SignUp.tsx" component is responsible for the app's registration screen. It allows users to create new accounts by providing personal information, including name, email, and password. Key Features: Name input field, email input field, password input field, password confirmation field, input validation, registration button.

"Profile.tsx" Component

Description: The "Profile.tsx" component represents the user profile screen. It allows users to view and edit their profile information, such as name and preferred language, as well as log out. Key Features: Display of username and email address, option to edit profile information, selection of preferred language, logout button.

"Home.tsx" Component

Description: The "Home.tsx" component represents the app's home screen. It is responsible for displaying available products in various categories and allows users to browse and select products. Key Features: List of product categories, display of products by category, navigation to product details.

"LoggedCheckout.tsx" Component

Description: The "LoggedCheckout.tsx" component is responsible for the checkout screen for authenticated users. It includes payment options and order confirmation. Key Features: Selection of payment method, order confirmation.

"Splash.tsx" Component

Description: The "Splash.tsx" component is the initial loading screen of the app. It displays the app's logo and a loading animation. Key Features: App logo "Comprass," loading animation.

"SuccessContinue.tsx" Component

Description: The "SuccessContinue.tsx" component represents the success confirmation screen after a successful checkout process. Key Features: Success message, "Continue" button for the next step.

"SuccessEnd.tsx" Component

Description: The "SuccessEnd.tsx" component represents the final success screen after completing a payment process. The interface varies depending on the selected payment method (card, PIX, bank slip). Key Features: Display of payment method-specific information, "CONTINUE SHOPPING" button to return to the main screen.
