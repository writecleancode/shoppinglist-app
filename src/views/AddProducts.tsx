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
	const { defaultProducts, productsList, updateCustomProductsQuantity } = useContext(ProductsContext);
	const [productsToAdd, setProductsToAdd] = useState<never[] | ProductType[]>(defaultProducts);
	const [customProduct, setCustomProduct] = useState(initialProductState);
	const [searchInputValue, setSearchInputValue] = useState('');

	const handleCustomProducts = () => {
		// if (customProduct.quantity >= 0) {
		// 	setCustomProducts([{ ...customProduct, id: uuid(), name: searchInputValue }, ...customProducts]);
		// }

		setCustomProduct(initialProductState);
	};

	const handleBackButton = () => {
		hideAddProductView();
		handleCustomProducts();
	};

	const clearInput = () => {
		setSearchInputValue('');
	};

	// const sortedProductsToAdd = productsToAdd.toSorted((a, b) => {
	// 	if (a.name < b.name) {
	// 		return -1;
	// 	} else if (a.name > b.name) {
	// 		return 1;
	// 	} else {
	// 		return 0;
	// 	}
	// });

	// useEffect(() => {
	// 	if (!isActive) return;

	// 	if (searchInputValue) {
	// 		console.log('searchPhrase');
	// 		const matchingProducts = productsList.filter(product =>
	// 			product.name.toLowerCase().includes(searchInputValue.toLowerCase())
	// 		);
	// 		setProductsToAdd(matchingProducts);
	// 	} else {
	// 		setProductsToAdd(productsList);
	// 	}
	// }, [productsList]);

	useEffect(() => {
		isActive ? setProductsToAdd(productsList) : clearInput();
	}, [isActive]);

	useEffect(() => {
		updateCustomProductsQuantity(customProduct);
	}, [customProduct.quantity]);

	return (
		<Wrapper $isActive={isActive}>
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
				setCustomProduct={setCustomProduct}
				clearInput={clearInput}
				setProductsToAdd={setProductsToAdd}
			/>
		</Wrapper>
	);
};
