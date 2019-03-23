import Autosuggest from 'react-autosuggest';
import Home from './Home';
import React from 'react';
import axios from 'axios';

const typedModulesUrl = 'http://johnsanders.tv/search-index-min.json';

const HomeContainer: React.FunctionComponent = (): JSX.Element => {
	const [searchTerm, setSearchTerm] = React.useState<string>('');
	const [selectedModule, setSelectedModule] = React.useState<NpmModule>();
	const [typedModules, setTypedModules] = React.useState<TypedModule[]>();
	React.useEffect(() => {
		axios.get(typedModulesUrl).then(res => setTypedModules(res.data));
	}, []);
	const handleSearchChange = (
		_e: React.ChangeEvent<HTMLInputElement>,
		params: Autosuggest.ChangeEvent,
	): void => {
		setSearchTerm(params.newValue);
	};
	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
	};
	const isTypedModule = (moduleName: string): boolean => typedModules.some(m => m.t === moduleName);
	return (
		<Home
			handleSearchChange={handleSearchChange}
			handleSubmit={handleSubmit}
			isTypedModule={isTypedModule}
			searchTerm={searchTerm}
			selectedModule={selectedModule}
			setSelectedModule={setSelectedModule}
		/>
	);
};

export default HomeContainer;
