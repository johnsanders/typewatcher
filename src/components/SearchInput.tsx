import {
	getSuggestionValue,
	getSuggestions,
	shouldRenderSuggestions,
} from '../helpers/autosuggest';
import Autosuggest from 'react-autosuggest';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCheck } from '@fortawesome/pro-solid-svg-icons';

interface Props {
	handleSearchChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		params: Autosuggest.ChangeEvent,
	) => void;
	isTypedModule: (name: string) => boolean;
	searchTerm: string;
	setSelectedModule: (module: NpmModule) => void;
}
const SearchInput: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
	const [suggestions, setSuggestions] = React.useState([]);
	const onSuggestionsFetchRequested = async ({ value }): Promise<void> => {
		const suggestions = await getSuggestions(value);
		setSuggestions(suggestions.slice(0, 10));
	};
	const onSuggestionsClearRequested = (): void => {
		setSuggestions([]);
	};
	const handleModuleSelected = (
		_e: React.FormEvent,
		data: Autosuggest.SuggestionSelectedEventData<NpmModule>,
	): void => {
		props.setSelectedModule(data.suggestion);
	};
	const renderSuggestion = (
		suggestion: NpmModule,
		_params: Autosuggest.RenderSuggestionParams,
	): JSX.Element => {
		return (
			<>
				<span>{suggestion.package.name}</span>
				{!props.isTypedModule(suggestion.package.name) ? null : (
					<Icon className="text-success" icon={faCheck} />
				)}
			</>
		);
	};
	return (
		<div className="form-group>">
			<label htmlFor="search" id="searchLabel">
				Search npm packages
			</label>
			<Autosuggest
				getSuggestionValue={getSuggestionValue}
				inputProps={{
					id: 'search',
					onChange: props.handleSearchChange,
					value: props.searchTerm,
					placeholder: 'leftpad',
					className: 'form-control',
				}}
				onSuggestionSelected={handleModuleSelected}
				onSuggestionsClearRequested={onSuggestionsClearRequested}
				onSuggestionsFetchRequested={onSuggestionsFetchRequested}
				renderSuggestion={renderSuggestion}
				shouldRenderSuggestions={shouldRenderSuggestions}
				suggestions={suggestions}
			/>
		</div>
	);
};

export default SearchInput;
