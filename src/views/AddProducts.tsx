import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from 'src/providers/ProductsProvider';
import { SearchBar } from 'src/components/molecules/SearchBar/SearchBar';
import { ProductsToAddList } from 'src/components/organisms/ProductsToAddList/ProductsToAddList';
import { BackButton, SearchWrapper, Wrapper } from './AddProducts.styles';
import { AddProductsProps, ProductType } from 'src/types/types';

export const initialProductState = {
	name: '',
	category: {
		name: 'other',
		imgSrc: 'src/assets/img/category-icons/other.png',
	},
	quantity: -1,
	unit: '',
	isBought: false,
};

export const AddProducts = ({ isActive, hideAddProductView }: AddProductsProps) => {
	const { defaultProducts, updateCustomProductsQuantity } = useContext(ProductsContext);
	const [productsToAdd, setProductsToAdd] = useState<never[] | ProductType[]>(defaultProducts);
	const [customProduct, setCustomProduct] = useState(initialProductState);
	const [searchInputValue, setSearchInputValue] = useState('');

	const handleBackButton = () => {
		hideAddProductView();
		setCustomProduct(initialProductState);
	};

	const clearInput = () => setSearchInputValue('');

	useEffect(() => {
		isActive ? setProductsToAdd(defaultProducts) : clearInput();
	}, [isActive]);

	useEffect(() => {
		updateCustomProductsQuantity(customProduct);
	}, [customProduct.quantity]);

	return (
		<Wrapper $isActive={isActive} inert={isActive ? undefined : ''}>
			<div>
				<SearchWrapper>
					<BackButton onClick={handleBackButton} aria-label='go back to the list of product to buy'>
						<img src='src/assets/icons/arrow-left.svg' alt='' />
					</BackButton>
					<SearchBar
						searchInputValue={searchInputValue}
						setSearchInputValue={setSearchInputValue}
						clearInput={clearInput}
						setProductsToAdd={setProductsToAdd}
						customProduct={customProduct}
						setCustomProduct={setCustomProduct}
					/>
				</SearchWrapper>
			</div>
			<ProductsToAddList
				products={productsToAdd}
				customProduct={customProduct}
				clearInput={clearInput}
				setProductsToAdd={setProductsToAdd}
				setCustomProduct={setCustomProduct}
			/>
		</Wrapper>
	);
};
