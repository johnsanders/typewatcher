interface NpmUser {
	email: string;
	username: string;
}
interface NpmModule {
	highlight: string;
	package: {
		author: {
			email: string;
			name: string;
		};
		date: string;
		description?: string;
		links: {
			bugs?: string;
			homepage?: string;
			npm: string;
			repository?: string;
		};
		maintainers?: NpmUser[];
		name: string;
		publisher: NpmUser;
		scope: string;
		version: string;
	};
	score: {
		detail: {
			quality: number;
			popularity: number;
			maintenance: number;
			final: number;
		};
	};
	searchScore: number;
}
