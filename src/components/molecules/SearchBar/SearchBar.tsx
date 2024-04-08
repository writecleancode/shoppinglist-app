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

	const updateProductsList = (searchPhrase: string) => {
		const matchingProducts = productsToAddList.filter(product =>
			product.name.toLowerCase().includes(searchPhrase.toLowerCase())
		);
		setProductsToAdd(matchingProducts);
	};

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value);
		updateProductsList(e.currentTarget.value);
	};

	return (
		<Wrapper>
			<SearchInput placeholder='add new item' value={inputValue} onChange={handleInputChange} />
			<ClearInputButton aria-label='clear input' type='button'>
				<img src='src/assets/icons/x-circle.svg' alt='' />
			</ClearInputButton>
		</Wrapper>
	);
};
