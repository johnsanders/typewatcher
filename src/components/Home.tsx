import React from 'react';
import SearchInput from './SearchInput';

interface Props {
	handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	searchTerm: string;
}

const Home: React.SFC<Props> = (props: Props): JSX.Element => {
	return (
		<div className="container-fluid" style={{ minHeight: '100vh' }}>
			<h1 className="text-center">TypeWatcher</h1>
			<div className="row">
				<div className="col-sm-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
					<form className="form" onSubmit={props.handleSubmit}>
						<div className="form-group">
							<SearchInput
								searchTerm={props.searchTerm}
								handleSearchChange={props.handleSearchChange}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Home;
