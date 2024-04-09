import { Header } from 'src/components/atoms/Header/Header';
import { ProgressBar } from 'src/components/atoms/ProgressBar/ProgressBar';
import { ProductsList } from 'src/components/organisms/ProductsList/ProductsList';
import { AddButton } from 'src/components/atoms/AddButton/AddButton';
import { AddProducts } from './AddProducts';
import { Wrapper } from './MainView.styles';

type MainViewProps = {
	isAdditemActive: boolean;
	showAdditemView: () => void;
	hideAdditemView: () => void;
};

export const MainView = ({ showAdditemView, isAdditemActive, hideAdditemView }: MainViewProps) => {
	return (
		<Wrapper>
			<div>
				<Header />
				<ProgressBar currentProgress={20} />
			</div>
			<ProductsList />
			<AddButton onClick={showAdditemView} />
			<AddProducts isActive={isAdditemActive} hideAdditemView={hideAdditemView} />
		</Wrapper>
	);
};
