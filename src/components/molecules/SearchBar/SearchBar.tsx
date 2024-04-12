import { Dispatch, FormEvent, useCallback } from 'react';
import { debounce } from 'lodash';
import { ProductType } from 'src/views/MainView';
import { ClearInputButton, SearchInput, Wrapper } from './SearchBar.styles';

type SearchBarProps = {
	searchInputValue: string;
	setSearchInputValue: Dispatch<React.SetStateAction<string>>;
	handleClearInput: () => void;
	productsList: ProductType[];
	setProductsToAdd: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
};

export const SearchBar = ({
	searchInputValue,
	setSearchInputValue,
	handleClearInput,
	productsList,
	setProductsToAdd,
}: SearchBarProps) => {
	const updateProductsList = useCallback(
		debounce((searchPhrase = '') => {
			if (!searchPhrase) setProductsToAdd(productsList);

			const matchingProducts = productsList.filter(product =>
				product.name.toLowerCase().includes(searchPhrase.toLowerCase())
			);
			setProductsToAdd(matchingProducts);
		}, 500),
		[productsList]
	);

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
		setSearchInputValue(e.currentTarget.value);
		updateProductsList(e.currentTarget.value);
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
