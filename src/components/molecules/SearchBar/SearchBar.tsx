import { Dispatch, FormEvent, useCallback } from 'react';
import { debounce } from 'lodash';
import { ProductType } from 'src/views/MainView';
import { ClearInputButton, SearchInput, Wrapper } from './SearchBar.styles';
import { CustomProductType, initialProductState } from 'src/views/AddProducts';

type SearchBarProps = {
	searchInputValue: string;
	setSearchInputValue: Dispatch<React.SetStateAction<string>>;
	handleClearInput: () => void;
	defaultProducts: ProductType[];
	setProductsToAdd: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	customProduct: CustomProductType;
	setCustomProduct: Dispatch<React.SetStateAction<CustomProductType>>;
};

export const SearchBar = ({
	searchInputValue,
	setSearchInputValue,
	handleClearInput,
	defaultProducts,
	setProductsToAdd,
	customProduct,
	setCustomProduct,
}: SearchBarProps) => {
	const updateDefaultProductsList = useCallback(
		debounce((searchPhrase = '') => {
			if (!searchPhrase) setProductsToAdd(defaultProducts);

			const matchingProducts = defaultProducts.filter(product =>
				product.name.toLowerCase().includes(searchPhrase.toLowerCase())
			);
			setProductsToAdd(matchingProducts);
		}, 500),
		[defaultProducts]
	);

	const handleCustomProduct = useCallback(
		debounce((searchPhrase = '') => {
			if (!searchPhrase) setCustomProduct(initialProductState);

			if (defaultProducts.map(product => product.name).includes(searchPhrase)) return;

			setCustomProduct(prevState => ({
				...prevState,
				name: searchPhrase,
			}));
		}, 500),
		[customProduct]
	);

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
		setSearchInputValue(e.currentTarget.value);
		updateDefaultProductsList(e.currentTarget.value);
		handleCustomProduct(e.currentTarget.value);
	};

	return (
		<Wrapper>
			<SearchInput placeholder='add new item' value={searchInputValue} onChange={handleInputChange} />
			<ClearInputButton aria-label='clear input' type='button' onClick={handleClearInput}>
				<img src='src/assets/icons/x-circle.svg' alt='' />
			</ClearInputButton>
		</Wrapper>
	);
};
