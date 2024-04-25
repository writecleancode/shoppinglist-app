import { Dispatch, FormEvent, useCallback, useContext } from 'react';
import { debounce } from 'lodash';
import { initialProductState } from 'src/views/AddProducts';
import { ProductsContext } from 'src/providers/ProductsProvider';
import { ClearInputButton, SearchInput, Wrapper } from './SearchBar.styles';
import { CustomProductType, ProductType } from 'src/types/types';

type SearchBarProps = {
	searchInputValue: string;
	setSearchInputValue: Dispatch<React.SetStateAction<string>>;
	clearInput: () => void;
	setProductsToAdd: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	customProduct: CustomProductType;
	setCustomProduct: Dispatch<React.SetStateAction<CustomProductType>>;
};

export const SearchBar = ({
	searchInputValue,
	setSearchInputValue,
	clearInput,
	setProductsToAdd,
	customProduct,
	setCustomProduct,
}: SearchBarProps) => {
	const { productsList } = useContext(ProductsContext);

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

	const handleClearInputButton = () => {
		clearInput();
		setProductsToAdd(productsList);
	};

	return (
		<Wrapper>
			<SearchInput
				name='searchInput'
				placeholder='add new item'
				value={searchInputValue}
				onChange={handleInputChange}
			/>
			<ClearInputButton onClick={handleClearInputButton} aria-label='clear input'>
				<img src='src/assets/icons/x-circle.svg' alt='' />
			</ClearInputButton>
		</Wrapper>
	);
};
