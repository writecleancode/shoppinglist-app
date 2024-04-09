import { Dispatch, FormEvent, useCallback, useState } from 'react';
import { debounce } from 'lodash';
import { items } from 'src/data/items';
import { ProductType } from 'src/views/AddProducts';
import { ClearInputButton, SearchInput, Wrapper } from './SearchBar.styles';

type SearchBarProps = {
	setProductsToAdd: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
};

export const SearchBar = ({ setProductsToAdd }: SearchBarProps) => {
	const [inputValue, setInputValue] = useState('');
	const productsToAddList = items;

	const updateProductsList = useCallback(
		debounce((searchPhrase = '') => {
			if (!searchPhrase) setProductsToAdd(productsToAddList);

			const matchingProducts = productsToAddList.filter(product =>
				product.name.toLowerCase().includes(searchPhrase.toLowerCase())
			);
			setProductsToAdd(matchingProducts);
		}, 500),
		[]
	);

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value);
		updateProductsList(e.currentTarget.value);
	};

	const handleClearInput = () => {
		setInputValue('');
		setProductsToAdd(productsToAddList);
	};

	return (
		<Wrapper>
			<SearchInput placeholder='add new item' value={inputValue} onChange={handleInputChange} />
			<ClearInputButton aria-label='clear input' type='button' onClick={handleClearInput}>
				<img src='src/assets/icons/x-circle.svg' alt='' />
			</ClearInputButton>
		</Wrapper>
	);
};
