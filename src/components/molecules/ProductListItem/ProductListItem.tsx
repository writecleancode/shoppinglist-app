import { useState } from 'react';
import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
import { ProductType } from 'src/views/MainView';
import { QuantityOfProduct } from 'src/components/atoms/QuantityOfProduct/QuantityOfProduct';
import { ProductName, Wrapper } from './ProductListItem.styles';

type ProductListItemProps = {
	setProductsList: React.Dispatch<React.SetStateAction<ProductType[] | never[]>>;
	product: ProductType;
};

export const ProductListItem = ({
	setProductsList,
	product: { id, name, category, quantity, unit, isBought },
	setDefaultProducts,
	setCustomProducts,
	customProducts,
	openEditPanel,
	setEditedProduct,
}: ProductListItemProps) => {
	const [clickedProductId, setClickedProductId] = useState(-1);

	const handleBoughtStatus = (productId: number | string, isBought: boolean) => {
		setClickedProductId(productId);

		const timeoutValue = isBought ? 400 : 650;

		if (typeof productId === 'number') {
			setTimeout(() => {
				setDefaultProducts(prevProducts => [
					...prevProducts.slice(0, productId - 1),
					{
						...prevProducts[productId - 1],
						isBought: !prevProducts[productId - 1].isBought,
					},
					...prevProducts.slice(productId),
				]);
			}, timeoutValue);
		} else {
			setTimeout(() => {
				const checkedProductIndex = customProducts.map(product => product.id).indexOf(productId);

				setCustomProducts(prevProducts => [
					...prevProducts.slice(0, checkedProductIndex),
					{
						...prevProducts[checkedProductIndex],
						isBought: !prevProducts[checkedProductIndex].isBought,
					},
					...prevProducts.slice(checkedProductIndex + 1),
				]);
			}, timeoutValue);
		}

		// setTimeout(() => {
		// 	setClickedProductId(-1);

		// 	if (typeof productId === 'number') {
		// 		setDefaultProducts(prevProducts => [
		// 			...prevProducts.slice(0, productId - 1),
		// 			{
		// 				...prevProducts[productId - 1],
		// 				isBought: !prevProducts[productId - 1].isBought,
		// 			},
		// 			...prevProducts.slice(productId),
		// 		]);
		// 	} else {
		// 		const checkedProductIndex = customProducts.map(product => product.id).indexOf(productId);

		// 		setCustomProducts(prevProducts => [
		// 			...prevProducts.slice(0, checkedProductIndex),
		// 			{
		// 				...prevProducts[checkedProductIndex],
		// 				isBought: !prevProducts[checkedProductIndex].isBought,
		// 			},
		// 			...prevProducts.slice(checkedProductIndex + 1),
		// 		]);
		// 	}

		// 	// setProductsList(productsList => [
		// 	// 	...productsList.slice(0, productId - 1),
		// 	// 	{
		// 	// 		...productsList[productId - 1],
		// 	// 		isBought: !productsList[productId - 1].isBought,
		// 	// 	},
		// 	// 	...productsList.slice(productId),
		// 	// ]);

		// }, timeoutValue);
	};

	const handleOpenEditPanel = () => {
		setEditedProduct({
			id,
			name,
			category,
			quantity,
			unit,
			isBought,
		});
		openEditPanel();
	};

	return (
		<Wrapper $isBought={isBought}>
			<StatusButton
				isBought={isBought}
				animationType={id === clickedProductId ? (isBought ? 'uncheckAnimation' : 'checkAnimation') : 'noAnimation'}
				onClick={() => handleBoughtStatus(id, isBought)}
			/>
			<ProductName onClick={handleOpenEditPanel}>{name}</ProductName>
			<QuantityOfProduct $quantity={quantity}>
				{quantity}
				{quantity > 0 ? unit : ''}
			</QuantityOfProduct>
			<CategoryIcon $category={category.name} $isBought={isBought} type='button' aria-label='change product category'>
				<img src={category.imgSrc} alt={`icon of category: ${category.name}`} />
			</CategoryIcon>
		</Wrapper>
	);
};
