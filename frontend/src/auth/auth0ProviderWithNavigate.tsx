import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

/**
 * Auth0ProviderWithNavigate Component
 * 
 * This component serves as a wrapper for the Auth0Provider from the Auth0 React SDK.
 * It provides authentication functionality with navigation support.
 * 
 * @param {Props} props - Props containing children (main content) to be wrapped within the Auth0Provider.
 * @returns {JSX.Element} Auth0ProviderWithNavigate component JSX
 */

const Auth0ProviderWithNavigate = ({children}: Props) => {
	// Retrieve Auth0 configuration from environment variables
	const domain = import.meta.env.VITE_AUTH0_DOMAIN;
	const clientId = import.meta.env.VITE_AUTH0_CLIENTID;
	const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

	// Validate Auth0 configuration
	if (!domain || !clientId || !redirectUri) {
		throw new Error("Unable to initialize authentication. Missing configuration parameters.");
	}

	/**
   * onRedirectCallback Function
   * 
   * Callback function to handle redirect after authentication.
   * It logs the user information upon successful authentication.
   * Additional logic can be added here as needed.
   * 
   * @param {AppState} appState - The state of the application before redirection.
   * @param {User} user - The authenticated user object.
   */

	const onRedirectCallback = (appState?: AppState, user?: User) => {
		console.log("USER", user);
	};

	return(
		<Auth0Provider 
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: redirectUri,
			}}
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	);
};

export default Auth0ProviderWithNavigate;