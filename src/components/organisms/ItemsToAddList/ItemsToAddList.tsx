import { Dispatch } from 'react';
import { AddItemButton, AmountOfItems, DecreaseButton, ItemToAdd, PlusIcon, StyledList } from './ItemsToAddList.styles';
import { ProductType } from 'src/views/AddProducts';

type ItemsToAddListProps = {
	products: ProductType[];
	setProductsToAdd: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
};

export const ItemsToAddList = ({ products, setProductsToAdd }: ItemsToAddListProps) => {
	const handleAddProduct = (productId: number) => {
		if (products.length === 0) return;

		setProductsToAdd([
			...products.slice(0, productId - 1),
			{
				...products[productId - 1],
				amount: products[productId - 1].amount + 1,
			},
			...products.slice(productId),
		]);
	};

	return (
		<StyledList>
			{products.map(({ id, name, amount }) => (
				<ItemToAdd key={id}>
					<AddItemButton onClick={() => handleAddProduct(id)} aria-label={`add ${name} to the list`} type='button'>
						<PlusIcon $isAdded={amount !== 0}>
							<img src='src/assets/icons/plus-big.svg' alt='' />
						</PlusIcon>
						{name}
					</AddItemButton>
					<AmountOfItems $amount={amount}>{amount}</AmountOfItems>
					<DecreaseButton $amount={amount} />
				</ItemToAdd>
			))}
		</StyledList>
	);
};
