import axios from 'axios';

const endpoint = 'https://api.npms.io/v2/search/suggestions?q=';

export const shouldRenderSuggestions = (searchTerm: string): boolean =>
	searchTerm.trim().length > 2;

export const getSuggestions = async (searchTerm: string): Promise<any[]> => {
	const res = await axios.get(endpoint + searchTerm);
	return res.data;
};

export const getSuggestionValue = (suggestion: any): string => suggestion.name;
