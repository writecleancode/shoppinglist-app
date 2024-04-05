import { FixedTop } from 'src/components/atoms/StyledFixedTop/FixedTop';
import { Header } from 'src/components/atoms/Header/Header';
import { ProgressBar } from 'src/components/atoms/ProgressBar/ProgressBar';
import { ItemsList } from 'src/components/organisms/ItemsList/ItemsList';
import { AddButton } from 'src/components/atoms/AddButton/AddButton';

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
