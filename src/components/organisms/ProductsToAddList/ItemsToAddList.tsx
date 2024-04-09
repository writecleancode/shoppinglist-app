import { Dispatch, useState } from 'react';
import { ProductType } from 'src/views/AddProducts';
import {
	AddItemButton,
	QuantityOfItems,
	DecreaseButton,
	ItemToAdd,
	PlusIcon,
	StyledList,
} from './ItemsToAddList.styles';

type ItemsToAddListProps = {
	products: ProductType[];
	setProductsToAdd: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
};

let timeout: NodeJS.Timeout;

export const ItemsToAddList = ({ products, setProductsToAdd }: ItemsToAddListProps) => {
	const [lastClickedProductId, setLastClickedProductId] = useState(-1);

	const handleProductquantity = (productId: number, direction: string) => {
		if (products.length === 0) return;

		const quantityChanger = direction === 'increase' ? 1 : -1;

		handlePlusIconScale(productId);
		setProductsToAdd([
			...products.slice(0, productId - 1),
			{
				...products[productId - 1],
				quantity: products[productId - 1].quantity + quantityChanger,
			},
			...products.slice(productId),
		]);
	};

	const handlePlusIconScale = (productId: number) => {
		setLastClickedProductId(productId);
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			setLastClickedProductId(-1);
		}, 500);
	};

	return (
		<StyledList>
			{products.map(({ id, name, quantity }) => (
				<ItemToAdd key={id}>
					<AddItemButton
						onClick={() => handleProductquantity(id, 'increase')}
						aria-label={`add ${name} to the list`}
						type='button'>
						<PlusIcon $isAdded={quantity !== 0} $quantity={quantity} $isAnimating={id === lastClickedProductId}>
							<img src='src/assets/icons/plus-big.svg' alt='' />
						</PlusIcon>
						{name}
					</AddItemButton>
					<QuantityOfItems $quantity={quantity}>{quantity}</QuantityOfItems>
					<DecreaseButton $quantity={quantity} onClick={() => handleProductquantity(id, 'decrease')} />
				</ItemToAdd>
			))}
		</StyledList>
	);
};
