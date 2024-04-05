import { AddButton } from './components/atoms/AddButton/AddButton';
import { Header } from './components/atoms/Header/Header';
import { ProgressBar } from './components/atoms/ProgressBar/ProgressBar';
import { ItemsList } from './components/organisms/ItemsList/ItemsList';
import { FixedTop } from './Root.styles';

export const Root = () => {
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
