import { useEffect, useState } from 'react';
import { items } from 'src/data/items';
import { ItemsToAddList } from 'src/components/organisms/ProductsToAddList/ItemsToAddList';
import { BackButton, SearchWrapper, Wrapper } from './AddProducts.styles';
import { SearchBar } from 'src/components/molecules/SearchBar/SearchBar';

type AddItemProps = {
	isActive: boolean;
	hideAdditemView: () => void;
};

export type ProductType = {
	id: number;
	name: string;
	amount: number;
};

export const AddProducts = ({ isActive, hideAdditemView }: AddItemProps) => {
	const [productsToAdd, setProductsToAdd] = useState<never[] | ProductType[]>([]);

	useEffect(() => {
		setProductsToAdd(items);
	}, []);

	return (
		<Wrapper $isActive={isActive}>
			<div>
				<SearchWrapper>
					<BackButton onClick={hideAdditemView} aria-label='go back to items list' type='button'>
						<img src='src/assets/icons/arrow-left.svg' alt='' />
					</BackButton>
					<SearchBar setProductsToAdd={setProductsToAdd} />
				</SearchWrapper>
			</div>
			<ItemsToAddList products={productsToAdd} setProductsToAdd={setProductsToAdd} />
		</Wrapper>
	);
};
