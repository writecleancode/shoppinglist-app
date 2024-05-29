import { Wrapper } from './AddButton.styles';

export const AddButton = (props: any) => {
	return (
		<Wrapper {...props} aria-label='add products'>
			<img src='src/assets/icons/plus.svg' alt='' />
			Add
		</Wrapper>
	);
};
