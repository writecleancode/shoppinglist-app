import { Dispatch, useEffect, useState } from 'react';
import { ProductType } from 'src/views/MainView';
import { QuantityOfProduct } from 'src/components/atoms/QuantityOfProduct/QuantityOfProduct';
import { AddProductButton, DecreaseButton, ProductToAdd, PlusIcon, StyledList } from './ProductsToAddList.styles';
import { CustomProductType } from 'src/views/AddProducts';

type ProductsToAddListProps = {
	setDefaultProducts: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	products: ProductType[];
	customProduct: CustomProductType;
	setCustomProduct: Dispatch<React.SetStateAction<CustomProductType>>;
};

let timeout: NodeJS.Timeout;

export const ProductsToAddList = ({
	setDefaultProducts,
	products,
	customProduct,
	setCustomProduct,
	customProducts,
	setCustomProducts,
	clearInput,
	setProductsToAdd,
}: ProductsToAddListProps) => {
	const [lastClickedProductId, setLastClickedProductId] = useState(-1);
	const [quantityNumber, setQuantityNumber] = useState(-1); // used for plus icon rotate animation - to prevent animation after custom product is replaced by another

	const handleCustomProductQuantity = (productId: number, direction: string) => {
		const quantityChanger = direction === 'increase' ? 1 : -1;

		handlePlusIconScale(productId);
		setQuantityNumber(prevQuantity => prevQuantity + quantityChanger);
		setCustomProduct(prevState => ({
			...prevState,
			quantity: prevState.quantity + quantityChanger,
		}));
		clearInput();
	};

	const handleProductQuantity = (productId: number | string, index: number, direction: string) => {
		const quantityChanger = direction === 'increase' ? 1 : -1;

		handlePlusIconScale(productId);
		setProductsToAdd(prevProducts => [
			...prevProducts.slice(0, index),
			{
				...prevProducts[index],
				quantity: prevProducts[index].quantity + quantityChanger,
			},
			...prevProducts.slice(index + 1),
		]);
		clearInput();

		if (typeof productId === 'number') {
			setDefaultProducts(prevProducts => [
				...prevProducts.slice(0, productId - 1),
				{
					...prevProducts[productId - 1],
					quantity: prevProducts[productId - 1].quantity + quantityChanger,
				},
				...prevProducts.slice(productId),
			]);
		} else {
			const checkedProductIndex = customProducts.map(product => product.id).indexOf(productId);

			setCustomProducts(prevProducts => [
				...prevProducts.slice(0, checkedProductIndex),
				{
					...prevProducts[checkedProductIndex],
					quantity: prevProducts[checkedProductIndex].quantity + quantityChanger,
				},
				...prevProducts.slice(checkedProductIndex + 1),
			]);
		}
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
			{customProduct.name === '' ? null : (
				<ProductToAdd key={-999}>
					<AddProductButton
						onClick={() => handleCustomProductQuantity(-999, 'increase')}
						aria-label={`add ${customProduct.name} to the list`}
						type='button'>
						<PlusIcon
							$isAdded={customProduct.quantity >= 0}
							$quantity={quantityNumber}
							$isAnimating={-999 === lastClickedProductId}>
							<img src='src/assets/icons/plus-big.svg' alt='' />
						</PlusIcon>
						{customProduct.name}
					</AddProductButton>
					<QuantityOfProduct $quantity={customProduct.quantity}>{customProduct.quantity}</QuantityOfProduct>
					<DecreaseButton
						$quantity={customProduct.quantity}
						onClick={() => handleCustomProductQuantity(-999, 'decrease')}
					/>
				</ProductToAdd>
			)}

			{products
				.sort((a, b) => {
					if (a.name < b.name) {
						return -1;
					} else if (a.name > b.name) {
						return 1;
					} else {
						return 0;
					}
				})
				.map(({ id, name, quantity }, index) => (
					<ProductToAdd key={id}>
						<AddProductButton
							onClick={() => handleProductQuantity(id, index, 'increase')}
							aria-label={`add ${name} to the list`}
							type='button'>
							<PlusIcon $isAdded={quantity >= 0} $quantity={quantity} $isAnimating={id === lastClickedProductId}>
								<img src='src/assets/icons/plus-big.svg' alt='' />
							</PlusIcon>
							{name}
						</AddProductButton>
						<QuantityOfProduct $quantity={quantity}>{quantity}</QuantityOfProduct>
						<DecreaseButton $quantity={quantity} onClick={() => handleProductQuantity(id, index, 'decrease')} />
					</ProductToAdd>
				))}
		</StyledList>
	);
};
