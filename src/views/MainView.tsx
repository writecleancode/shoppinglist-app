import { Header } from 'src/components/atoms/Header/Header';
import { ProgressBar } from 'src/components/atoms/ProgressBar/ProgressBar';
import { ItemsList } from 'src/components/organisms/ItemsList/ItemsList';
import { AddButton } from 'src/components/atoms/AddButton/AddButton';
import { Wrapper } from './MainView.styles';

type MainViewProps = {
	showAdditemView: () => void;
};

export const MainView = ({ showAdditemView }: MainViewProps) => {
	return (
		<Wrapper>
			<div>
				<Header />
				<ProgressBar currentProgress={20} />
			</div>
			<ItemsList />
			<AddButton onClick={showAdditemView} />
		</Wrapper>
	);
};
