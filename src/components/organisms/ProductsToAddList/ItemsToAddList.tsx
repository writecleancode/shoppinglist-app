import { Dispatch, useState } from 'react';
import { AddItemButton, AmountOfItems, DecreaseButton, ItemToAdd, PlusIcon, StyledList } from './ItemsToAddList.styles';
import { ProductType } from 'src/views/AddProducts';

type ItemsToAddListProps = {
	products: ProductType[];
	setProductsToAdd: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
};

let timeout: NodeJS.Timeout;

export const ItemsToAddList = ({ products, setProductsToAdd }: ItemsToAddListProps) => {
	const [lastClickedProductId, setLastClickedProductId] = useState(-1);

	const handleProductAmount = (productId: number, direction: string) => {
		if (products.length === 0) return;

		const quantityChanger = direction === 'increase' ? 1 : -1;

		handlePlusIconScale(productId);
		setProductsToAdd([
			...products.slice(0, productId - 1),
			{
				...products[productId - 1],
				amount: products[productId - 1].amount + quantityChanger,
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
			{products.map(({ id, name, amount }) => (
				<ItemToAdd key={id}>
					<AddItemButton
						onClick={() => handleProductAmount(id, 'increase')}
						aria-label={`add ${name} to the list`}
						type='button'>
						<PlusIcon $isAdded={amount !== 0} $amount={amount} $isAnimating={id === lastClickedProductId}>
							<img src='src/assets/icons/plus-big.svg' alt='' />
						</PlusIcon>
						{name}
					</AddItemButton>
					<AmountOfItems $amount={amount}>{amount}</AmountOfItems>
					<DecreaseButton $amount={amount} onClick={() => handleProductAmount(id, 'decrease')} />
				</ItemToAdd>
			))}
		</StyledList>
	);
};
