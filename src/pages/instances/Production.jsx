import { h } from 'preact'; // eslint-disable-line no-unused-vars

import { App, InstanceFacet, InstanceLink, List } from '../../components';

const Production = props => {

	const { documentTitle, pageTitle, production } = props;

	const { model, theatre, playtext, cast } = production;

	return (
		<App documentTitle={documentTitle} pageTitle={pageTitle} model={model}>

			{
				theatre && (
					<InstanceFacet labelText='Theatre'>

						<InstanceLink instance={theatre} />

					</InstanceFacet>
				)
			}

			{
				playtext && (
					<InstanceFacet labelText='Playtext'>

						<InstanceLink instance={playtext} />

					</InstanceFacet>
				)
			}

			{
				cast?.length > 0 && (
					<InstanceFacet labelText='Cast'>

						<List instances={cast} />

					</InstanceFacet>
				)
			}

		</App>
	);

};

export default Production;
