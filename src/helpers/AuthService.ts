import axios, { AxiosResponse } from 'axios';
import { autoBind } from 'react-extras';
import decode from 'jwt-decode';

export default class AuthService {
	private domain: string;
	public constructor(domain: string) {
		this.domain = domain || 'http://localhost:8080';
		autoBind(this);
	}
	public async login(username: string, password: string): Promise<any> {
		const res = await this.fetch(`${this.domain}/login`, {
			method: 'POST',
			body: JSON.stringify({
				username,
				password,
			}),
		});
		this.setToken(res.token);
		return Promise.resolve(res.data);
	}
	public loggedIn(): boolean {
		const token = this.getToken();
		return token !== null && !this.isTokenExpired(token);
	}
	public isTokenExpired(token: string): boolean {
		try {
			const decoded = decode<JwtPayload>(token);
			return decoded.exp < Date.now() / 1000;
		} catch (e) {
			return false;
		}
	}
	public setToken(idToken: string): void {
		localStorage.setItem('id_token', idToken);
	}
	public getToken(): string {
		return localStorage.getItem('id_token');
	}
	public logout(): void {
		localStorage.removeItem('id_token');
	}
	public getProfile(): JwtPayload {
		return decode(this.getToken());
	}
	public async fetch(url: string, options: any): Promise<any> {
		const headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		};
		if (this.loggedIn()) {
			headers['Authorization'] = 'Bearer ' + this.getToken();
		}
		const res = await axios.get(url, { headers, ...options });
		this.checkStatus(res);
		return res.data;
	}
	private checkStatus(response: AxiosResponse): AxiosResponse {
		if (response.status >= 200 && response.status < 300) {
			return response;
		} else {
			var error = new Error(response.statusText);
			throw error;
		}
	}
}
