import { Dispatch, useEffect, useState } from 'react';
import { ProductsToAddList } from 'src/components/organisms/ProductsToAddList/ProductsToAddList';
import { BackButton, SearchWrapper, Wrapper } from './AddProducts.styles';
import { SearchBar } from 'src/components/molecules/SearchBar/SearchBar';
import { ProductType } from './MainView';

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
	productsList: ProductType[];
	isActive: boolean;
	setProductsList: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	hideAdditemView: () => void;
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
	productsList,
	setProductsList,
	isActive,
	hideAdditemView,
	customProducts,
	setCustomProducts,
}: AddItemProps) => {
	const [productsToAdd, setProductsToAdd] = useState<never[] | ProductType[]>(productsList);
	const [customProduct, setCustomProduct] = useState(initialProductState);
	const [searchInputValue, setSearchInputValue] = useState('');

	const handleClearInput = () => {
		setSearchInputValue('');
		setProductsToAdd(productsList);
	};

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

	useEffect(() => {
		if (isActive) return;

		handleClearInput();
	}, [isActive]);

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
						handleClearInput={handleClearInput}
						productsList={productsList}
						setProductsToAdd={setProductsToAdd}
						customProduct={customProduct}
						setCustomProduct={setCustomProduct}
					/>
				</SearchWrapper>
			</div>
			<ProductsToAddList
				productsList={productsList}
				setProductsList={setProductsList}
				products={productsToAdd}
				searchInputValue={searchInputValue}
				customProduct={customProduct}
			/>
		</Wrapper>
	);
};
