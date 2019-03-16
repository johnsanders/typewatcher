import axios from 'axios';
import React from 'react';

const endpoint = 'https://api.npms.io/v2/search/suggestions?q=';

export const getSuggestions = async (searchTerm: string): Promise<any[]> => {
	const res = await axios.get(endpoint + searchTerm);
	console.log(res.data);
	return [];
};

export const renderSuggestion = (suggestion: any): JSX.Element => <div>{suggestion.name}</div>;
export const getSuggestionValue = (suggestion: any): string => suggestion.name;
