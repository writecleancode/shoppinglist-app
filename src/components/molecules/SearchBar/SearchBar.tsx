import { Dispatch, FormEvent, useCallback } from 'react';
import { debounce } from 'lodash';
import { ProductType } from 'src/views/MainView';
import { ClearInputButton, SearchInput, Wrapper } from './SearchBar.styles';
import { CustomProductType, initialProductState } from 'src/views/AddProducts';

type SearchBarProps = {
	searchInputValue: string;
	setSearchInputValue: Dispatch<React.SetStateAction<string>>;
	clearInput: () => void;
	defaultProducts: ProductType[];
	setProductsToAdd: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	customProduct: CustomProductType;
	setCustomProduct: Dispatch<React.SetStateAction<CustomProductType>>;
};

export const SearchBar = ({
	searchInputValue,
	setSearchInputValue,
	clearInput,
	defaultProducts,
	setProductsToAdd,
	customProduct,
	setCustomProduct,
	productsList,
	setProductsList,
}: SearchBarProps) => {
	const updateProductsList = useCallback(
		debounce((searchPhrase = '') => {
			if (!searchPhrase) return setProductsToAdd(productsList);

			const matchingProducts = productsList.filter(product =>
				product.name.toLowerCase().includes(searchPhrase.toLowerCase())
			);
			setProductsToAdd(matchingProducts);
		}, 500),
		[productsList]
	);

	const handleCustomProduct = useCallback(
		debounce((searchPhrase = '') => {
			if (!searchPhrase) return setCustomProduct(initialProductState);

			if (productsList.map(product => product.name).includes(searchPhrase)) return;

			setCustomProduct({
				...initialProductState,
				name: searchPhrase,
			});
		}, 500),
		[customProduct]
	);

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
		setSearchInputValue(e.currentTarget.value);
		updateProductsList(e.currentTarget.value);
		handleCustomProduct(e.currentTarget.value);
	};

	return (
		<Wrapper>
			<SearchInput placeholder='add new item' value={searchInputValue} onChange={handleInputChange} />
			<ClearInputButton aria-label='clear input' type='button' onClick={clearInput}>
				<img src='src/assets/icons/x-circle.svg' alt='' />
			</ClearInputButton>
		</Wrapper>
	);
};
