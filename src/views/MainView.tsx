import { Header } from 'src/components/atoms/Header/Header';
import { ProgressBar } from 'src/components/atoms/ProgressBar/ProgressBar';
import { ProductsList } from 'src/components/organisms/ProductsList/ProductsList';
import { AddButton } from 'src/components/atoms/AddButton/AddButton';
import { AddProducts } from './AddProducts';
import { Wrapper } from './MainView.styles';
import { ProductType } from './Root';
import { Dispatch } from 'react';

type MainViewProps = {
	productsList: ProductType[];
	isAdditemActive: boolean;
	setProductsList: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	showAdditemView: () => void;
	hideAdditemView: () => void;
};

export const MainView = ({ productsList, setProductsList, isAdditemActive, showAdditemView, hideAdditemView }: MainViewProps) => {
	return (
		<Wrapper>
			<div>
				<Header />
				<ProgressBar currentProgress={20} />
			</div>
			<ProductsList productsList={productsList} />
			<AddButton onClick={showAdditemView} />
			<AddProducts productsList={productsList} setProductsList={setProductsList} isActive={isAdditemActive} hideAdditemView={hideAdditemView} />
		</Wrapper>
	);
};
