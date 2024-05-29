import { Wrapper } from './AddButton.styles';

export const AddButton = (props: any) => {
	return (
		<Wrapper {...props} aria-label='add products'>
			<img src='/icons/plus.svg' alt='' />
			Add
		</Wrapper>
	);
};
