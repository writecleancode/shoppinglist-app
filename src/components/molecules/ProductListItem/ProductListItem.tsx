import { useContext, useState } from 'react';
import { ProductsContext } from 'src/providers/ProductsProvider';
import { EditProductContext, actionTypes } from 'src/providers/EditProductProvider';
import { ChangeCategoryContext } from 'src/providers/ChangeCategoryProvider';
import { StatusButton } from 'src/components/atoms/StatusButton/StatusButton';
import { QuantityOfProduct } from 'src/components/atoms/QuantityOfProduct/QuantityOfProduct';
import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';
import { ProductNameButton, Wrapper } from './ProductListItem.styles';
import { ProductListItemProps } from 'src/types/types';

export const ProductListItem = ({
	product: { firestoreId, id, name, category, userCategory, quantity, unit, isBought },
}: ProductListItemProps) => {
	const [clickedProductId, setClickedProductId] = useState<string | number>(-1);
	const { handleBoughtStatus } = useContext(ProductsContext);
	const { openEditPanel, dispatch } = useContext(EditProductContext);
	const { openCategoryPanel } = useContext(ChangeCategoryContext);

	const handleBoughtStatusButton = (firestoreId: string, productId: number | string, isBought: boolean) => {
		setClickedProductId(productId);
		handleBoughtStatus(firestoreId, productId, isBought);
	};

	const handleProductClick = () => {
		dispatch({ type: actionTypes.setEditedProduct, firestoreId, id, name, category, userCategory, quantity, unit, isBought });
		openEditPanel();
	};

	return (
		<Wrapper $isBought={isBought}>
			<StatusButton
				isBought={isBought}
				animationType={id === clickedProductId ? (isBought ? 'uncheckAnimation' : 'checkAnimation') : 'noAnimation'}
				onClick={() => handleBoughtStatusButton(firestoreId, id, isBought)}
			/>
			<ProductNameButton onClick={handleProductClick} aria-label={`${name} (click to edit product details)`}>
				{name}
			</ProductNameButton>
			<QuantityOfProduct $quantity={quantity}>
				{quantity}
				{quantity > 0 ? unit : ''}
			</QuantityOfProduct>
			<CategoryIcon
				$category={userCategory ? userCategory.name : category.name}
				$isBought={isBought}
				aria-label={`product category: ${userCategory ? userCategory.name : category.name} (click to change product category)`}
				onClick={() => openCategoryPanel(userCategory ? userCategory.name : category.name, id, firestoreId)}>
				<img src={userCategory ? userCategory.imgSrc : category.imgSrc} alt='' />
			</CategoryIcon>
		</Wrapper>
	);
};
