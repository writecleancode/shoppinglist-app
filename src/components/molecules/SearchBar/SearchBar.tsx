import { Dispatch, FormEvent, useState } from 'react';
import { items } from 'src/data/items';
import { ProductType } from 'src/views/AddProducts';
import { ClearInputButton, SearchInput, Wrapper } from './SearchBar.styles';

type SearchBarProps = {
	setProductsToAdd: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
};

export const SearchBar = ({ setProductsToAdd }: SearchBarProps) => {
	const [inputValue, setInputValue] = useState('');
	const productsToAddList = items;

	const updateProductsList = (searchPhrase = '') => {
		if (!searchPhrase) setProductsToAdd(productsToAddList);

		const matchingProducts = productsToAddList.filter(product =>
			product.name.toLowerCase().includes(searchPhrase.toLowerCase())
		);
		setProductsToAdd(matchingProducts);
	};

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value);
		updateProductsList(e.currentTarget.value);
	};

	const handleClearInput = () => {
		setInputValue('');
		updateProductsList();
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
