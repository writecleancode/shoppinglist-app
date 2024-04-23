import { useContext, useState } from 'react';
import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
import { ProductType } from 'src/views/MainView';
import { QuantityOfProduct } from 'src/components/atoms/QuantityOfProduct/QuantityOfProduct';
import { ProductName, Wrapper } from './ProductListItem.styles';
import { ProductsContext } from 'src/providers/ProductsProvider';
import { EditProductContext } from 'src/providers/EditProductProvider';
import { ChangeCategoryContext } from 'src/providers/ChangeCategoryProvider';

type ProductListItemProps = {
	product: ProductType;
};

export const ProductListItem = ({
	product: { id, name, category, userCategory, quantity, unit, isBought },
}: ProductListItemProps) => {
	const { customProducts, setDefaultProducts, setCustomProducts } = useContext(ProductsContext);
	const { openEditPanel, setEditedProduct } = useContext(EditProductContext);
	const { openCategoryPanel } = useContext(ChangeCategoryContext);
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
			<CategoryIcon
				$category={userCategory ? userCategory.name : category.name}
				$isBought={isBought}
				type='button'
				aria-label='change product category'
				onClick={() => openCategoryPanel(userCategory ? userCategory.name : category.name, id)}>
				<img
					src={userCategory ? userCategory.imgSrc : category.imgSrc}
					alt={`icon of category: ${userCategory ? userCategory.name : category.name}`}
				/>
			</CategoryIcon>
		</Wrapper>
	);
};
