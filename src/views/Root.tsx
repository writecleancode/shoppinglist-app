import { useState } from 'react';
import { MainView } from './MainView';
import { Wrapper } from './Root.styles';

export const Root = () => {
	const [isAdditemActive, setAdditemState] = useState(true);

	const showAdditemView = () => setAdditemState(true);
	const hideAdditemView = () => setAdditemState(false);

	return (
		<Wrapper>
			<MainView showAdditemView={showAdditemView} isAdditemActive={isAdditemActive} hideAdditemView={hideAdditemView} />
		</Wrapper>
	);
};
