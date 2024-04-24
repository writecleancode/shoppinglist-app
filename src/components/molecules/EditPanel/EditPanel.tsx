import { ChangeEvent, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { ProductsContext } from 'src/providers/ProductsProvider';
import { EditProductContext, actionTypes } from 'src/providers/EditProductProvider';
import { ChangeCategoryContext } from 'src/providers/ChangeCategoryProvider';
import { AppShadowLayer } from 'src/components/atoms/AppShadowLayer/AppShadowLayer';
import {
	CategoryButton,
	CategoryIconCircle,
	ChangeQuantityButton,
	ChevronRight,
	ControlChangesButton,
	ControlChangesButtonsWrapper,
	MainInfoWrapper,
	NameInput,
	QuantityButtonWrapper,
	QuantityInput,
	QuantityWrapper,
	UnitButton,
	UnitButtonsWrapper,
	UnitInput,
	Wrapper,
} from './EditPanel.styles';

export const EditPanel = () => {
	const { defaultProducts, customProducts, setDefaultProducts, setCustomProducts } = useContext(ProductsContext);
	const { isEditPanelOpen, editedProduct, closeEditPanel, dispatch } = useContext(EditProductContext);
	const { openCategoryPanel } = useContext(ChangeCategoryContext);
	// const checkKey = e => {
	// 	if (e.key !== 'Escape') return;

	// 	closeEditPanel();
	// };

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: actionTypes.inputChange, key: e.target.name, value: e.target.value });
	};

	const handleUnitButtons = (unit: string) => {
		dispatch({ type: actionTypes.unitButtonsChange, unit });
	};

	const handleQuantityButtons = (direction: string) => {
		const quantityChanger = direction === 'increase' ? 1 : -1;
		dispatch({ type: actionTypes.quantityButtonChange, quantityChanger });
	};

	const handleSaveChangesButton = () => {
		if (typeof editedProduct.id === 'string') {
			const productIndex = customProducts.map(product => product.id).indexOf(editedProduct.id);
			setCustomProducts(prevProducts => [
				...prevProducts.slice(0, productIndex),
				editedProduct,
				...prevProducts.slice(productIndex + 1),
			]);
		} else if (typeof editedProduct.id === 'number') {
			const productIndex = defaultProducts.map(product => product.id).indexOf(editedProduct.id);

			if (defaultProducts.map(product => product.name).includes(editedProduct.name)) {
				setDefaultProducts(prevProducts => [
					...prevProducts.slice(0, productIndex),
					{
						...prevProducts[productIndex],
						userCategory: editedProduct.category,
						quantity: editedProduct.quantity,
						unit: editedProduct.unit,
					},
					...prevProducts.slice(productIndex + 1),
				]);
			} else {
				setDefaultProducts(prevProducts => [
					...prevProducts.slice(0, productIndex),
					{
						...prevProducts[productIndex],
						quantity: -1,
						unit: '',
						isBought: false,
					},
					...prevProducts.slice(productIndex + 1),
				]);
				setCustomProducts(prevProducts => [...prevProducts, { ...editedProduct, id: uuid() }]);
			}
		}

		closeEditPanel();
	};

	// useEffect(() => {
	// 	window.addEventListener('keydown', handleClosePanels);

	// 	return () => window.removeEventListener('keydown', handleClosePanels);
	// }, [isOpen]);

	return (
		<>
			<AppShadowLayer $isOpen={isEditPanelOpen} onClick={closeEditPanel}></AppShadowLayer>
			<Wrapper id='editPanel' tabIndex={0} $isOpen={isEditPanelOpen}>
				<ControlChangesButtonsWrapper>
					<ControlChangesButton $isAbort onClick={closeEditPanel}>
						<img src='src/assets/icons/arrow-left-small.svg' alt='' />
						abort
					</ControlChangesButton>
					<ControlChangesButton onClick={() => handleSaveChangesButton(editedProduct.id)}>
						<img src='src/assets/icons/check-small.svg' alt='' />
						save
					</ControlChangesButton>
				</ControlChangesButtonsWrapper>
				<MainInfoWrapper>
					<NameInput type='text' name='name' value={editedProduct.name} onChange={handleInputChange} />
					<CategoryButton
						type='button'
						aria-label='change product category'
						onClick={() => openCategoryPanel(editedProduct.category.name)}>
						<CategoryIconCircle as='div' $category={editedProduct.category.name} $isBought={false}>
							<img src={editedProduct.category.imgSrc} alt={`icon of category: ${editedProduct.category.imgSrc}`} />
						</CategoryIconCircle>
						<span>{editedProduct.category.name}</span>
						<ChevronRight src='src/assets/icons/chevron-right.svg' alt='' />
					</CategoryButton>
				</MainInfoWrapper>
				<QuantityWrapper>
					<QuantityInput
						type='number'
						name='quantity'
						placeholder='quantity'
						min='0'
						max='9999999'
						value={editedProduct.quantity > 0 ? editedProduct.quantity : ''}
						onChange={handleInputChange}
					/>
					<UnitInput
						type='text'
						name='unit'
						placeholder='unit'
						maxLength={10}
						value={editedProduct.unit}
						onChange={handleInputChange}
					/>
					<UnitButtonsWrapper>
						<UnitButton onClick={() => handleUnitButtons('l')} $isCurrentUnit={editedProduct.unit === 'l'}>
							l
						</UnitButton>
						<UnitButton onClick={() => handleUnitButtons('ml')} $isCurrentUnit={editedProduct.unit === 'ml'}>
							ml
						</UnitButton>
						<UnitButton onClick={() => handleUnitButtons('kg')} $isCurrentUnit={editedProduct.unit === 'kg'}>
							kg
						</UnitButton>
						<UnitButton onClick={() => handleUnitButtons('g')} $isCurrentUnit={editedProduct.unit === 'g'}>
							g
						</UnitButton>
					</UnitButtonsWrapper>
					<QuantityButtonWrapper>
						<ChangeQuantityButton onClick={() => handleQuantityButtons('decrease')}>
							<img src='src/assets/icons/minus.svg' alt='' />
						</ChangeQuantityButton>
						<ChangeQuantityButton onClick={() => handleQuantityButtons('increase')}>
							<img src='src/assets/icons/plus.svg' alt='' />
						</ChangeQuantityButton>
					</QuantityButtonWrapper>
				</QuantityWrapper>
			</Wrapper>
		</>
	);
};
