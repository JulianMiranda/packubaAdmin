import React, {useEffect, useState} from 'react';
import {Login, useLogin} from 'react-admin';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {initializeApp, auth} from 'firebase';
import {FirebaseConfig} from '../firebase/config';

initializeApp(FirebaseConfig);

const uiConfig = {
	signInFlow: 'popup',
	signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID, auth.EmailAuthProvider.PROVIDER_ID],
	callbacks: {
		signInSuccessWithAuthResult: () => false,
	},
};

const SignInScreen = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const login = useLogin();

	useEffect(() => {
		const unregisterAuthObserver = auth().onAuthStateChanged((user) => setIsSignedIn(!!user));
		return () => unregisterAuthObserver();
	}, []);

	if (isSignedIn) login();

	return !isSignedIn && <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />;
};

export const CustomLoginPage = (props) => (
	<Login {...props}>
		<SignInScreen />
	</Login>
);
