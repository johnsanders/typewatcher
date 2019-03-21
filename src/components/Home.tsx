import Autosuggest from 'react-autosuggest';
import ModuleResult from './ModuleResult';
import React from 'react';
import SearchInput from './SearchInput';

interface Props {
	handleSearchChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		params: Autosuggest.ChangeEvent,
	) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	isTypedModule: (name: string) => boolean;
	searchTerm: string;
	selectedModule: NpmModule;
	setSelectedModule: (module: NpmModule) => void;
}

const Home: React.SFC<Props> = (props: Props): JSX.Element => {
	return (
		<div className="container-fluid" style={{ minHeight: '100vh' }}>
			<h1 className="text-center mt-5">TypeWatcher</h1>
			<div className="row">
				<div className="col-sm-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
					<form className="form" onSubmit={props.handleSubmit}>
						<div className="form-group">
							<SearchInput
								handleSearchChange={props.handleSearchChange}
								searchTerm={props.searchTerm}
								setSelectedModule={props.setSelectedModule}
							/>
							<ModuleResult selectedModule={props.selectedModule} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Home;
