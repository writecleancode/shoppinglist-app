import { Dispatch, useEffect, useState } from 'react';
import { ProductsToAddList } from 'src/components/organisms/ProductsToAddList/ProductsToAddList';
import { BackButton, SearchWrapper, Wrapper } from './AddProducts.styles';
import { SearchBar } from 'src/components/molecules/SearchBar/SearchBar';
import { ProductType } from './MainView';
import { v4 as uuid } from 'uuid';

export const initialProductState = {
	name: '',
	category: {
		name: 'other',
		imgSrc: 'src/assets/img/category-icons/other.png',
	},
	quantity: -1,
	isBought: false,
};

type AddItemProps = {
	defaultProducts: ProductType[];
	isActive: boolean;
	setDefaultProducts: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	hideAddProductView: () => void;
	customProducts: ProductType[];
	setCustomProducts: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
};

export type CustomProductType = {
	name: string;
	category: {
		name: string;
		imgSrc: string;
	};
	quantity: number;
	isBought: boolean;
};

export const AddProducts = ({
	defaultProducts,
	setDefaultProducts,
	isActive,
	hideAddProductView,
	customProducts,
	setCustomProducts,
	productsList,
	setProductsList,
}: AddItemProps) => {
	const [productsToAdd, setProductsToAdd] = useState<never[] | ProductType[]>(defaultProducts);
	const [customProduct, setCustomProduct] = useState(initialProductState);
	const [searchInputValue, setSearchInputValue] = useState('');

	const clearInput = () => {
		setSearchInputValue('');
	};

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
		if (!searchInputValue || customProduct.name === '') return;

		const checkedProductIndex = customProducts.map(product => product.name).indexOf(searchInputValue);

		if (customProducts.length !== 0 && checkedProductIndex >= 0) {
			setCustomProducts(prevProducts => [
				...prevProducts.slice(0, checkedProductIndex),
				{ ...prevProducts[checkedProductIndex], quantity: customProduct.quantity },
			]);
		} else {
			setCustomProducts(prevProducts => [{ id: uuid(), ...customProduct }, ...prevProducts]);
		}
	}, [customProduct.quantity]);

	return (
		<Wrapper $isActive={isActive}>
			<div>
				<SearchWrapper>
					<BackButton onClick={handleBackButton} aria-label='go back to items list' type='button'>
						<img src='src/assets/icons/arrow-left.svg' alt='' />
					</BackButton>
					<SearchBar
						searchInputValue={searchInputValue}
						setSearchInputValue={setSearchInputValue}
						clearInput={clearInput}
						defaultProducts={defaultProducts}
						setProductsToAdd={setProductsToAdd}
						customProduct={customProduct}
						setCustomProduct={setCustomProduct}
						productsList={productsList}
						setProductsList={setProductsList}
					/>
				</SearchWrapper>
			</div>
			<ProductsToAddList
				setDefaultProducts={setDefaultProducts}
				products={productsToAdd}
				customProduct={customProduct}
				setCustomProduct={setCustomProduct}
				clearInput={clearInput}
				setProductsToAdd={setProductsToAdd}
			/>
		</Wrapper>
	);
};
