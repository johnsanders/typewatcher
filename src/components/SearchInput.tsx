import React from 'react';
import Autosuggest from 'react-autosuggest';
import {
	getSuggestions,
	getSuggestionValue,
	shouldRenderSuggestions,
} from '../helpers/autosuggest';

interface Props {
	handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	searchTerm: string;
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
	params: Autosuggest.RenderSuggestionParams,
): JSX.Element => {
	console.log(suggestion, params);
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
	return (
		<Autosuggest
			getSuggestionValue={getSuggestionValue}
			inputProps={{
				onChange: props.handleSearchChange,
				value: props.searchTerm,
			}}
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
