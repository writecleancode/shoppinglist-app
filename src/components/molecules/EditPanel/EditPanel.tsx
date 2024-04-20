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
	const testFunction = e => {
		if (e.key !== 'Escape') return;

		closeEditPanel();
	};

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', testFunction);
		} else {
			window.removeEventListener('keydown', testFunction);
		}
	}, [isOpen]);

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
					<NameInput type='text' value={editedProduct.name} />
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
					/>
					<UnitInput type='text' placeholder='unit' maxLength={10} />
					<UnitButtonsWrapper>
						<UnitButton>l</UnitButton>
						<UnitButton>ml</UnitButton>
						<UnitButton>kg</UnitButton>
						<UnitButton>g</UnitButton>
					</UnitButtonsWrapper>
					<QuantityButtonWrapper>
						<ChangeQuantityButton>
							<img src='src/assets/icons/minus.svg' alt='' />
						</ChangeQuantityButton>
						<ChangeQuantityButton>
							<img src='src/assets/icons/plus.svg' alt='' />
						</ChangeQuantityButton>
					</QuantityButtonWrapper>
				</QuantityWrapper>
			</Wrapper>
		</>
	);
};
