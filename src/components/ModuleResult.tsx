import React from 'react';

interface Props {
	selectedModule: NpmModule;
}

const ModuleResult: React.SFC<Props> = (props: Props): JSX.Element =>
	props.selectedModule === undefined ? null : (
		<div className="row">
			<div className="col-sm-12">{props.selectedModule.package.name}</div>
		</div>
	);

export default ModuleResult;
