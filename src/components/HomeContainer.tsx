import React from 'react';
import Home from './Home';

const HomeContainer: React.FunctionComponent = (): JSX.Element => {
	const [searchTerm, setSearchTerm] = React.useState('');
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSearchTerm(e.currentTarget.value);
	};
	const handleSubmit = (): void => {};
	return (
		<Home
			handleSearchChange={handleSearchChange}
			handleSubmit={handleSubmit}
			searchTerm={searchTerm}
		/>
	);
};

export default HomeContainer;
