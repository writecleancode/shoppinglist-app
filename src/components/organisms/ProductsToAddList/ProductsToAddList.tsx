import { Dispatch, useState } from 'react';
import { ProductType } from 'src/views/MainView';
import { QuantityOfProduct } from 'src/components/atoms/QuantityOfProduct/QuantityOfProduct';
import { AddProductButton, DecreaseButton, ProductToAdd, PlusIcon, StyledList } from './ProductsToAddList.styles';
import { CustomProductType } from 'src/views/AddProducts';

type ProductsToAddListProps = {
	productsList: ProductType[];
	setProductsList: Dispatch<React.SetStateAction<never[] | ProductType[]>>;
	products: ProductType[];
	searchInputValue: string;
	customProduct: CustomProductType;
};

let timeout: NodeJS.Timeout;

export const ProductsToAddList = ({
	productsList,
	setProductsList,
	products,
	searchInputValue,
	customProduct,
}: ProductsToAddListProps) => {
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
			{/* {searchInputValue === '' ? null : products.map(product => product.name).includes(searchInputValue) ? null : (
				<ProductToAdd key={999}>
					<AddProductButton
						onClick={() => handleProductquantity(999, 'increase')}
						aria-label={`add ${searchInputValue} to the list`}
						type='button'>
						<PlusIcon $isAdded={false} $quantity={-1} $isAnimating={false}>
							<img src='src/assets/icons/plus-big.svg' alt='' />
						</PlusIcon>
						{searchInputValue}
					</AddProductButton>
					<QuantityOfProduct $quantity={-1}>{-1}</QuantityOfProduct>
					<DecreaseButton $quantity={-1} onClick={() => handleProductquantity(999, 'decrease')} />
				</ProductToAdd>
			)} */}

			{customProduct.name === '' ? null : (
				<ProductToAdd key={999}>
					<AddProductButton
						onClick={() => handleProductquantity(999, 'increase')}
						aria-label={`add ${customProduct.name} to the list`}
						type='button'>
						<PlusIcon $isAdded={customProduct.quantity >= 0} $quantity={customProduct.quantity} $isAnimating={false}>
							<img src='src/assets/icons/plus-big.svg' alt='' />
						</PlusIcon>
						{customProduct.name}
					</AddProductButton>
					<QuantityOfProduct $quantity={customProduct.quantity}>{customProduct.quantity}</QuantityOfProduct>
					<DecreaseButton $quantity={customProduct.quantity} onClick={() => handleProductquantity(999, 'decrease')} />
				</ProductToAdd>
			)}

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
