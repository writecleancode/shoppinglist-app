import { Dispatch, useState } from 'react';
import { ProductType } from 'src/views/MainView';
import { QuantityOfProduct } from 'src/components/atoms/QuantityOfProduct/QuantityOfProduct';
import { AddProductButton, DecreaseButton, ProductToAdd, PlusIcon, StyledList } from './ProductsToAddList.styles';

type ProductsToAddListProps = {
	productsList: ProductType[];
	setProductsList: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	products: ProductType[];
};

let timeout: NodeJS.Timeout;

export const ProductsToAddList = ({ productsList, setProductsList, products }: ProductsToAddListProps) => {
	const [lastClickedProductId, setLastClickedProductId] = useState(-1);

	const handleProductquantity = (productId: number, direction: string) => {
		if (products.length === 0) return;

		const quantityChanger = direction === 'increase' ? 1 : -1;

		handlePlusIconScale(productId);
		setProductsList([
			...productsList.slice(0, productId - 1),
			{
				...productsList[productId - 1],
				quantity: productsList[productId - 1].quantity + quantityChanger,
			},
			...productsList.slice(productId),
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
				<ProductToAdd key={id}>
					<AddProductButton
						onClick={() => handleProductquantity(id, 'increase')}
						aria-label={`add ${name} to the list`}
						type='button'>
						<PlusIcon $isAdded={quantity >= 0} $quantity={quantity} $isAnimating={id === lastClickedProductId}>
							<img src='src/assets/icons/plus-big.svg' alt='' />
						</PlusIcon>
						{name}
					</AddProductButton>
					<QuantityOfProduct $quantity={quantity}>{quantity}</QuantityOfProduct>
					<DecreaseButton $quantity={quantity} onClick={() => handleProductquantity(id, 'decrease')} />
				</ProductToAdd>
			))}
		</StyledList>
	);
};
