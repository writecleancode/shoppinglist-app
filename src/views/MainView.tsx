import { Header } from 'src/components/atoms/Header/Header';
import { ProgressBar } from 'src/components/atoms/ProgressBar/ProgressBar';
import { ItemsList } from 'src/components/organisms/ItemsList/ItemsList';
import { AddButton } from 'src/components/atoms/AddButton/AddButton';
import { FixedTop } from './MainView.styles';

export const MainView = () => {
	return (
		<>
			<FixedTop>
				<Header />
				<ProgressBar currentProgress={20} />
			</FixedTop>
			<ItemsList />
			<AddButton />
		</>
	);
};
