import React from 'react';
import Autosuggest from 'react-autosuggest';
import {
	getSuggestions,
	getSuggestionValue,
	shouldRenderSuggestions,
} from '../helpers/autosuggest';

interface Props {
	handleSearchChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		params: Autosuggest.ChangeEvent,
	) => void;
	searchTerm: string;
	setSelectedModule: (module: NpmModule) => void;
}

const renderInputComponent = (inputProps: {}): JSX.Element => (
	<div className="input-group">
		<input {...inputProps} className="form-control" />
		<div className="input-group-append">
			<input type="submit" className="btn btn-primary" value="Search" />
		</div>
	</div>
);

const renderSuggestion = (
	suggestion: any,
	_params: Autosuggest.RenderSuggestionParams,
): JSX.Element => {
	return <span>{suggestion.package.name}</span>;
};

const SearchInput: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
	const [suggestions, setSuggestions] = React.useState([]);
	const onSuggestionsFetchRequested = async ({ value }): Promise<void> => {
		const suggestions = await getSuggestions(value);
		setSuggestions(suggestions);
	};
	const onSuggestionsClearRequested = (): void => {
		setSuggestions([]);
	};
	const handleModuleSelected = (
		_e: React.FormEvent,
		data: Autosuggest.SuggestionSelectedEventData<NpmModule>,
	): void => {
		console.log(data);
	};
	return (
		<Autosuggest
			getSuggestionValue={getSuggestionValue}
			inputProps={{
				onChange: props.handleSearchChange,
				value: props.searchTerm,
			}}
			onSuggestionSelected={handleModuleSelected}
			onSuggestionsClearRequested={onSuggestionsClearRequested}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
			renderInputComponent={renderInputComponent}
			renderSuggestion={renderSuggestion}
			shouldRenderSuggestions={shouldRenderSuggestions}
			suggestions={suggestions}
		/>
	);
};

export default SearchInput;
