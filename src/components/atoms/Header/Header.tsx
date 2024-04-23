import { useContext, useState } from 'react';
import { EllipsisButton, H1, Icon, RemoveBoughtProductsButton, Wrapper } from './Header.styles';
import { ProductsContext } from 'src/providers/ProductsProvider';

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
			<Icon src='src/assets/icons/cart.svg' alt='' />
			<H1>ShoppingList</H1>
			<EllipsisButton onClick={handleRemoveButtonState}>
				<img src='src/assets/icons/ellipsis-vertical.svg' alt='' />
			</EllipsisButton>
			<RemoveBoughtProductsButton $isVisible={isRemoveButtonVisible} onClick={handleRemoveBoughtProductsButton}>
				<img src='src/assets/icons/trash.svg' alt='' />
				Remove bought products
			</RemoveBoughtProductsButton>
		</Wrapper>
	);
};
