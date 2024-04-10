import { Dispatch, useEffect, useState } from 'react';
import { ItemsToAddList } from 'src/components/organisms/ProductsToAddList/ItemsToAddList';
import { BackButton, SearchWrapper, Wrapper } from './AddProducts.styles';
import { SearchBar } from 'src/components/molecules/SearchBar/SearchBar';
import { ProductType } from './MainView';

type AddItemProps = {
	productsList: ProductType[];
	isActive: boolean;
	setProductsList: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	hideAdditemView: () => void;
};

export const AddProducts = ({ productsList, setProductsList, isActive, hideAdditemView }: AddItemProps) => {
	const [productsToAdd, setProductsToAdd] = useState<never[] | ProductType[]>(productsList);
	const [searchInputValue, setSearchInputValue] = useState('');

	useEffect(() => {
		if (searchInputValue) {
			const matchingProducts = productsList.filter(product =>
				product.name.toLowerCase().includes(searchInputValue.toLowerCase())
			);
			setProductsToAdd(matchingProducts);
		} else {
			setProductsToAdd(productsList);
		}
	}, [productsList]);

	return (
		<Wrapper $isActive={isActive}>
			<div>
				<SearchWrapper>
					<BackButton onClick={hideAdditemView} aria-label='go back to items list' type='button'>
						<img src='src/assets/icons/arrow-left.svg' alt='' />
					</BackButton>
					<SearchBar
						searchInputValue={searchInputValue}
						setSearchInputValue={setSearchInputValue}
						productsList={productsList}
						setProductsToAdd={setProductsToAdd}
					/>
				</SearchWrapper>
			</div>
			<ItemsToAddList productsList={productsList} setProductsList={setProductsList} products={productsToAdd} />
		</Wrapper>
	);
};
