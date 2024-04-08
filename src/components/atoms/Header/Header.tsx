import { H1, Icon, Wrapper } from './Header.styles';

export const Header = () => {
	return (
		<Wrapper>
			<Icon src="src/assets/icons/cart.svg" alt="" />
			<H1>ShoppingList</H1>
		</Wrapper>
	);
};
