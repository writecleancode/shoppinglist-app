import { useState } from 'react';
import { MainView } from './MainView';
import { Wrapper } from './Root.styles';
import { products } from 'src/data/products';

export const Root = () => {
	const [isAdditemActive, setAdditemState] = useState(false);

	const showAdditemView = () => setAdditemState(true);
	const hideAdditemView = () => setAdditemState(false);

	return (
		<Wrapper>
			<MainView isAdditemActive={isAdditemActive} showAdditemView={showAdditemView} hideAdditemView={hideAdditemView} />
		</Wrapper>
	);
};
