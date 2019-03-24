import Autosuggest from 'react-autosuggest';
import ModuleResult from './ModuleResult';
import React from 'react';
import SearchInput from './SearchInput';
import dog from '../img/dog.jpg';

interface Props {
	handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSearchChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		params: Autosuggest.ChangeEvent,
	) => void;
	handleEmailSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	email: string;
	isTypedModule: (name: string) => boolean;
	searchTerm: string;
	selectedModule: NpmModule;
	setSelectedModule: (module: NpmModule) => void;
}

const Home: React.SFC<Props> = (props: Props): JSX.Element => {
	return (
		<div className="container-fluid mb-3">
			<h1 className="text-center mt-5 mb-3">TypeRetriever</h1>
			<div className="row">
				<div className="col-sm-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
					<div className="text-right">
						<img
							alt="Cute Golden Retriever"
							style={{ width: '17em', position: 'relative', right: '20px', top: '35px' }}
							src={dog}
						/>
					</div>
					<form onSubmit={props.handleEmailSubmit}>
						<SearchInput
							handleSearchChange={props.handleSearchChange}
							isTypedModule={props.isTypedModule}
							searchTerm={props.searchTerm}
							setSelectedModule={props.setSelectedModule}
						/>
					</form>
					{props.selectedModule === undefined ? null : (
						<ModuleResult
							isTypedModule={props.isTypedModule}
							selectedModule={props.selectedModule}
							handleEmailSubmit={props.handleEmailSubmit}
							handleEmailChange={props.handleEmailChange}
							email={props.email}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
