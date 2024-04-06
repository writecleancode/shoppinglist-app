import { MainView } from './MainView';
import { AddItem } from './AddItem';

export const Root = () => {
	return (
		<>
			<MainView />
			<AddItem isActive={true} />
		</>
	);
};
