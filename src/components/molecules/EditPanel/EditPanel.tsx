import { useEffect } from 'react';
import {
	AppShadowLayer,
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

type EditPanelProps = {
	isOpen: boolean;
};

export const EditPanel = ({ isOpen, closeEditPanel, editedProduct, setEditedProduct }: EditPanelProps) => {
	const checkKey = e => {
		if (e.key !== 'Escape') return;

		closeEditPanel();
	};

	const handleNameChange = e => {
		setEditedProduct(prevProduct => ({
			...prevProduct,
			name: e.target.value,
		}));
	};

	const handleQuantityChange = e => {
		setEditedProduct(prevProduct => ({
			...prevProduct,
			quantity: Number(e.target.value),
		}));
	};

	const handleUnitChange = e => {
		setEditedProduct(prevProduct => ({
			...prevProduct,
			unit: e.target.value,
		}));
	};

	const handleUnitButtons = unit => {
		setEditedProduct(prevProduct => ({
			...prevProduct,
			unit: unit,
		}));
	};

	const handleQuantityButtons = direction => {
		const quantityChanger = direction === 'increase' ? 1 : -1;

		setEditedProduct(prevProduct => ({
			...prevProduct,
			quantity: prevProduct.quantity + quantityChanger,
		}));
	};

	useEffect(() => {
		window.addEventListener('keydown', checkKey);
	}, []);

	return (
		<>
			<AppShadowLayer $isOpen={isOpen} onClick={closeEditPanel}></AppShadowLayer>
			<Wrapper id='editPanel' tabIndex={0} $isOpen={isOpen}>
				<ControlChangesButtonsWrapper>
					<ControlChangesButton $isAbort onClick={closeEditPanel}>
						<img src='src/assets/icons/arrow-left-small.svg' alt='' />
						abort
					</ControlChangesButton>
					<ControlChangesButton>
						<img src='src/assets/icons/check-small.svg' alt='' />
						save
					</ControlChangesButton>
				</ControlChangesButtonsWrapper>
				<MainInfoWrapper>
					<NameInput type='text' value={editedProduct.name} onChange={handleNameChange} />
					<CategoryButton type='button' aria-label='change product category'>
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
						placeholder='quantity'
						min='0'
						max='9999999'
						value={editedProduct.quantity > 0 ? editedProduct.quantity : ''}
						onChange={handleQuantityChange}
					/>
					<UnitInput
						type='text'
						placeholder='unit'
						maxLength={10}
						value={editedProduct.unit}
						onChange={handleUnitChange}
					/>
					<UnitButtonsWrapper>
						<UnitButton onClick={() => handleUnitButtons('l')} $isCurrentUnit={editedProduct.unit === 'l'}>l</UnitButton>
						<UnitButton onClick={() => handleUnitButtons('ml')} $isCurrentUnit={editedProduct.unit === 'ml'}>ml</UnitButton>
						<UnitButton onClick={() => handleUnitButtons('kg')} $isCurrentUnit={editedProduct.unit === 'kg'}>kg</UnitButton>
						<UnitButton onClick={() => handleUnitButtons('g')} $isCurrentUnit={editedProduct.unit === 'g'}>g</UnitButton>
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
