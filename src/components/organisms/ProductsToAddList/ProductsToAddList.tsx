import { useContext, useState } from 'react';
import { ProductsContext } from 'src/providers/ProductsProvider';
import { QuantityOfProduct } from 'src/components/atoms/QuantityOfProduct/QuantityOfProduct';
import { AddProductButton, DecreaseButton, ProductToAdd, PlusIcon, StyledList } from './ProductsToAddList.styles';
import { ProductsToAddListProps } from 'src/types/types';

let timeout: NodeJS.Timeout;

export const ProductsToAddList = ({ products, customProduct, clearInput, setProductsToAdd, setCustomProduct }: ProductsToAddListProps) => {
	const { updateProductsQuantity } = useContext(ProductsContext);
	const [lastClickedProductId, setLastClickedProductId] = useState<number | string>(-1);
	const [quantityNumber, setQuantityNumber] = useState(-1); // used for plus icon rotate animation - to prevent animation after custom product is replaced by another

	const handlePlusIconScale = (productId: number | string) => {
		setLastClickedProductId(productId);
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			setLastClickedProductId(-1);
		}, 500);
	};

	const handleCustomProductQuantity = (productId: number, direction: string) => {
		const quantityChanger = direction === 'increase' ? 1 : -1;

		handlePlusIconScale(productId);
		setQuantityNumber(prevQuantity => prevQuantity + quantityChanger);
		setCustomProduct(prevProduct => ({
			...prevProduct,
			quantity: prevProduct.quantity + quantityChanger,
		}));
		clearInput();
	};

	const handleProductQuantity = (firestoreId: string, productId: number | string, index: number, direction: string) => {
		const quantityChanger = direction === 'increase' ? 1 : -1;

		handlePlusIconScale(productId);
		setProductsToAdd(prevProducts => [
			...prevProducts.slice(0, index),
			{
				...prevProducts[index],
				quantity: prevProducts[index].quantity + quantityChanger,
				unit: prevProducts[index].quantity + quantityChanger < 0 ? '' : prevProducts[index].unit,
			},
			...prevProducts.slice(index + 1),
		]);
		clearInput();

		updateProductsQuantity(firestoreId, productId, quantityChanger);
	};

	return (
		<StyledList>
			{customProduct.name === '' ? null : (
				<ProductToAdd key={-999}>
					<AddProductButton
						onClick={() => handleCustomProductQuantity(-999, 'increase')}
						aria-label={`add ${customProduct.name} to the list`}>
						<PlusIcon $isAdded={customProduct.quantity >= 0} $quantity={quantityNumber} $isAnimating={-999 === lastClickedProductId}>
							<img src='/icons/plus-big.svg' alt='' />
						</PlusIcon>
						{customProduct.name}
					</AddProductButton>
					<QuantityOfProduct $quantity={customProduct.quantity}>{customProduct.quantity}</QuantityOfProduct>
					<DecreaseButton
						$quantity={customProduct.quantity}
						onClick={() => handleCustomProductQuantity(-999, 'decrease')}
						aria-label={`decrease quantity of ${customProduct.name}`}
					/>
				</ProductToAdd>
			)}

			{products
				.sort((a, b) => {
					if (a.name.toLowerCase() < b.name.toLowerCase()) {
						return -1;
					} else if (a.name.toLowerCase() > b.name.toLowerCase()) {
						return 1;
					} else {
						return 0;
					}
				})
				.map(({ firestoreId, id, name, quantity, unit }, index) => (
					<ProductToAdd key={id}>
						<AddProductButton
							onClick={() => handleProductQuantity(firestoreId, id, index, 'increase')}
							aria-label={`add ${name} to the list`}>
							<PlusIcon $isAdded={quantity >= 0} $quantity={quantity} $isAnimating={id === lastClickedProductId}>
								<img src='/icons/plus-big.svg' alt='' />
							</PlusIcon>
							{name}
						</AddProductButton>
						<QuantityOfProduct $quantity={quantity}>
							{quantity}
							{quantity > 0 ? unit : ''}
						</QuantityOfProduct>
						<DecreaseButton
							$quantity={quantity}
							onClick={() => handleProductQuantity(firestoreId, id, index, 'decrease')}
							aria-label={`decrease quantity of ${name}`}
						/>
					</ProductToAdd>
				))}
		</StyledList>
	);
};
