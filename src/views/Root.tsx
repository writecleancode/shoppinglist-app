import { useEffect, useState } from 'react';
import { products } from 'src/data/products';
import { MainView } from './MainView';
import { Wrapper } from './Root.styles';

export type ProductType = {
	id: number;
	name: string;
	quantity: number;
};

export const Root = () => {
	const [isAdditemActive, setAdditemState] = useState(true);
	const [productsList, setProductsList] = useState<never[] | ProductType[]>([]);

	useEffect(() => {
		setProductsList(products);
	}, []);

	const showAdditemView = () => setAdditemState(true);
	const hideAdditemView = () => setAdditemState(false);

	return (
		<Wrapper>
			<MainView
				productsList={productsList}
				setProductsList={setProductsList}
				isAdditemActive={isAdditemActive}
				showAdditemView={showAdditemView}
				hideAdditemView={hideAdditemView}
			/>
		</Wrapper>
	);
};
