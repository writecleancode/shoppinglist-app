import { Header } from 'src/components/atoms/Header/Header';
import { ProgressBar } from 'src/components/atoms/ProgressBar/ProgressBar';
import { ItemsList } from 'src/components/organisms/ItemsList/ItemsList';
import { AddButton } from 'src/components/atoms/AddButton/AddButton';
import { Wrapper } from './MainView.styles';

import { AddItem } from './AddItem';

type MainViewProps = {
	showAdditemView: () => void;
};

export const MainView = ({ showAdditemView, isAdditemActive, hideAdditemView }: MainViewProps) => {
	return (
		<Wrapper>
			<div>
				<Header />
				<ProgressBar currentProgress={20} />
			</div>
			<ItemsList />
			<AddButton onClick={showAdditemView} />

			<AddItem isActive={isAdditemActive} hideAdditemView={hideAdditemView} />
		</Wrapper>
	);
};
