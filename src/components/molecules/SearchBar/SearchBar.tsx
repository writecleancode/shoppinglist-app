import { FormEvent, useState } from 'react';
import { ClearInputButton, SearchInput, Wrapper } from './SearchBar.styles';

export const SearchBar = () => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value);

	return (
		<Wrapper>
			<SearchInput placeholder='add new item' value={inputValue} onChange={handleInputChange} />
			<ClearInputButton aria-label='clear input' type='button'>
				<img src='src/assets/icons/x-circle.svg' alt='' />
			</ClearInputButton>
		</Wrapper>
	);
};
