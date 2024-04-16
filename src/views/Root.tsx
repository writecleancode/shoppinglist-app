import { useState } from 'react';
import { MainView } from './MainView';
import { Wrapper } from './Root.styles';

export const Root = () => {
	const [isAddProductActive, setAddProductState] = useState(false);

	const showAddProductView = () => setAddProductState(true);
	const hideAddProductView = () => setAddProductState(false);

	return (
		<Wrapper>
			<MainView isAddProductActive={isAddProductActive} showAddProductView={showAddProductView} hideAddProductView={hideAddProductView} />
		</Wrapper>
	);
};
