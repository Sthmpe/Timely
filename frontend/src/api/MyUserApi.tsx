import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

// Base URL for API requests
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Type definition for the request body of createUser endpoint
type createUserRequest = {
	auth0Id: string;
	email: string;
};

/**
 * useCreateMyUser Hook
 * 
 * A custom hook for handling the creation of a user through the API.
 * It abstracts away the logic for making a POST request to the API to create a new user.
 * 
 * @returns {{
*   createUser: (user: createUserRequest) => Promise<void>; // Function to create a user
*   isLoading: boolean; // Indicates if the request is in progress
*   isError: boolean; // Indicates if an error occurred during the request
*   isSuccess: boolean; // Indicates if the request was successful
* }} Object containing functions and state for creating a user
*/

export const useCreateMyUser = () => {
	const { getAccessTokenSilently } = useAuth0();

	// Function to send a create user request to the API
	const createMyUserRequest = async (user: createUserRequest) => {
		const accessToken = await getAccessTokenSilently();

		const respone = await fetch(`${API_BASE_URL}/api/my/user`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});

		if (!respone.ok) {
			throw new Error("Failed to create user");
		}
	};

	// React Query hook for handling the mutation (POST request)
	const { 
		mutateAsync: createUser, 
		isLoading, 
		isError, 
		isSuccess
	} = useMutation(createMyUserRequest);

	// Return the createUser function and state variables
	return {
		createUser,
		isLoading,
		isError,
		isSuccess,
	};
};