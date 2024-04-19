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

export const EditPanel = ({ isOpen, closeEditPanel }: EditPanelProps) => {
	useEffect(() => {
		window.addEventListener('keydown', e => {
			if (e.key !== 'Escape') return;

			closeEditPanel();
		});
	}, []);

	return (
		<>
			<AppShadowLayer $isOpen={isOpen} onClick={closeEditPanel}></AppShadowLayer>
			<Wrapper $isOpen={isOpen}>
				<ControlChangesButtonsWrapper>
					<ControlChangesButton $isAbort={true} onClick={closeEditPanel}>
						<img src='src/assets/icons/arrow-left-small.svg' alt='' />
						abort
					</ControlChangesButton>
					<ControlChangesButton $isAbort={false}>
						<img src='src/assets/icons/check-small.svg' alt='' />
						save
					</ControlChangesButton>
				</ControlChangesButtonsWrapper>
				<MainInfoWrapper>
					<NameInput type='text' value='product name' />
					<CategoryButton type='button' aria-label='change product category'>
						<CategoryIconCircle as='div' $category={'other'} $isBought={false}>
							<img src={'src/assets/img/category-icons/other.png'} alt={`icon of category: ${'other'}`} />
						</CategoryIconCircle>
						<span>appliances and electronics</span>
						<ChevronRight src='src/assets/icons/chevron-right.svg' alt='' />
					</CategoryButton>
				</MainInfoWrapper>
				<QuantityWrapper>
					<QuantityInput type='number' placeholder='quantity' min='0' max='9999999' />
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
