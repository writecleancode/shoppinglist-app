import { useContext, useState } from 'react';
import { ProductsContext } from 'src/providers/ProductsProvider';
import { EllipsisButton, H1, CartIcon, RemoveBoughtProductsButton, Wrapper } from './Header.styles';

export const Header = () => {
	const [isRemoveButtonVisible, setRemoveButtonState] = useState(false);
	const { removeBoughtProducts } = useContext(ProductsContext);

	const handleRemoveButtonState = () => setRemoveButtonState(prevState => !prevState);

	const handleRemoveBoughtProductsButton = () => {
		removeBoughtProducts();
		setRemoveButtonState(false);
	};

	return (
		<Wrapper>
			<CartIcon src='src/assets/icons/cart.svg' alt='' />
			<H1>ShoppingList</H1>
			<EllipsisButton
				onClick={handleRemoveButtonState}
				aria-label={isRemoveButtonVisible ? 'hide "remove bought products" button' : 'show "remove bought products" button'}>
				<img src='src/assets/icons/ellipsis-vertical.svg' alt='' />
			</EllipsisButton>
			<RemoveBoughtProductsButton
				$isVisible={isRemoveButtonVisible}
				onClick={handleRemoveBoughtProductsButton}
				tabIndex={isRemoveButtonVisible ? 0 : -1}>
				<img src='src/assets/icons/trash.svg' alt='' />
				Remove bought products
			</RemoveBoughtProductsButton>
		</Wrapper>
	);
};
