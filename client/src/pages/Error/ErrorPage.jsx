import React from 'react';
import Error from '../../components/Error/Error';

function ErrorPage(props) {
	const { backendError } = props;
	return <Error backendError={backendError} />;
}

export default ErrorPage;
