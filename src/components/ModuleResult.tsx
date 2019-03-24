import { faCheck, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
	selectedModule: NpmModule;
	isTypedModule: (name: string) => boolean;
	handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleEmailSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	email: string;
}

const ModuleResult: React.SFC<Props> = (props: Props): JSX.Element => {
	const { description, name } = props.selectedModule.package;
	const isTyped = props.isTypedModule(name);
	const url = `https://www.npmjs.com/package/@types/${name}`;
	return (
		<div className="row mt-3">
			<div className="col-sm-12">
				<div className="card">
					<div className="card-header text-center">
						<h3>{name}</h3>
						<span>{description}</span>
					</div>
					<div
						className="card-body d-flex flex-column justify-content-center"
						style={{ minHeight: '15em' }}
					>
						{isTyped ? (
							<>
								<div className="text-center">
									<Icon className="fa-7x mb-3 text-success" icon={faCheck} />
								</div>
								<div className="text-center">
									<strong>This module is already typed.</strong>
								</div>
								<div className="text-center">
									Install with npm: <code>npm i -D @types/{name}</code>
								</div>
								<div className="text-center">
									Install with yarn: <code>yarn add --dev @types/{name}</code>
								</div>
								<div className="text-center">
									<a href={url}>{url}</a>
								</div>
							</>
						) : (
							<>
								<div className="text-center">
									<Icon className="fa-7x mb-3 text-danger" icon={faTimes} />
								</div>
								<div className="text-center">
									<strong>No @types definitions for this module.</strong>
								</div>
								<div className="text-center">
									It may already include definitions in the module itself.
								</div>
							</>
						)}
					</div>
					{isTyped ? null : (
						<div className="card-footer">
							<form onSubmit={props.handleEmailSubmit}>
								<div className="form-group">
									<label htmlFor="email">
										Get an email when <strong>@types/{name}</strong> is published.
									</label>
									<div className="input-group">
										<input
											id="email"
											className="form-control"
											onChange={props.handleEmailChange}
											value={props.email}
											placeholder="somebody@example.com"
										/>
										<div className="input-group-append">
											<input className="btn btn-secondary" type="submit" value="Submit" />
										</div>
									</div>
								</div>
							</form>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default ModuleResult;
