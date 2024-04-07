import { useState } from 'react';
import { MainView } from './MainView';
import { AddItem } from './AddItem';

export const Root = () => {
	const [isAdditemActive, setAdditemState] = useState(true);

	const showAdditemView = () => setAdditemState(true)
	const hideAdditemView = () => setAdditemState(false)

	return (
		<>
			<MainView showAdditemView={showAdditemView}  />
			<AddItem isActive={isAdditemActive} hideAdditemView={hideAdditemView} />
		</>
	);
};
