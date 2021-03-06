import { h } from 'preact'; // eslint-disable-line no-unused-vars

import { App, InstanceFacet, JoinedRoles, List } from '../../components';

const Character = props => {

	const { documentTitle, pageTitle, character } = props;

	const { model, playtexts, variantNames, productions } = character;

	return (
		<App documentTitle={documentTitle} pageTitle={pageTitle} model={model}>

			{
				playtexts?.length > 0 && (
					<InstanceFacet labelText='Playtexts'>

						<List instances={playtexts} />

					</InstanceFacet>
				)
			}

			{
				variantNames?.length > 0 && (
					<InstanceFacet labelText='Variant names'>

						<JoinedRoles instances={variantNames} />

					</InstanceFacet>
				)
			}

			{
				productions?.length > 0 && (
					<InstanceFacet labelText='Productions'>

						<List instances={productions} />

					</InstanceFacet>
				)
			}

		</App>
	);

};

export default Character;
