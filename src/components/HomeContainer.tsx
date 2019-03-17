import React from 'react';
import Autosuggest from 'react-autosuggest';
import Home from './Home';

const HomeContainer: React.FunctionComponent = (): JSX.Element => {
	const [searchTerm, setSearchTerm] = React.useState<string>('');
	const [selectedModule, setSelectedModule] = React.useState<NpmModule>();
	const handleSearchChange = (
		_e: React.ChangeEvent<HTMLInputElement>,
		params: Autosuggest.ChangeEvent,
	): void => {
		setSearchTerm(params.newValue);
	};
	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
	};
	return (
		<Home
			handleSearchChange={handleSearchChange}
			handleSubmit={handleSubmit}
			searchTerm={searchTerm}
			selectedModule={selectedModule}
			setSelectedModule={setSelectedModule}
		/>
	);
};

export default HomeContainer;
