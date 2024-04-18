import ReactModal from 'react-modal';
import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';
import styled from 'styled-components';

export const Wrapper = styled(ReactModal)`
	position: absolute;
	top: auto;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	padding: 1.2rem 0.8rem;
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
	width: 100%;
	background-color: #ddd;

	&:focus {
		outline: none;
	}
`;

export const QuantityWrapper = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-template-columns: auto auto auto;
	gap: 0.8rem;
`;

export const StyledInput = styled.input`
	margin-top: auto;
	margin-bottom: auto;
	padding: 0.8rem;
	border: none;
	border-radius: 0.8rem;
	background-color: #fafafa;
	background-color: #fff;
	font-size: 1.4rem;
	width: 100%;
`;

export const NameInput = styled(StyledInput)`
	font-size: 1.6rem;
`;

export const QuantityInput = styled(StyledInput)`
	grid-row: 1 / 2;
	grid-column: 1 / 2;
`;

export const UnitInput = styled(StyledInput)`
	grid-row: 1 / 2;
	grid-column: 2 / 3;
`;

// export const UnitsWrapper = styled.div`
// 	grid-row: 1 / 2;
// 	grid-column: 1 / 3;
// 	display: flex;
// 	align-items: center;
// 	gap: 1.6rem;
// `;

export const UnitButtonsWrapper = styled.div`
	grid-row: 2 / 3;
	grid-column: 1 / 4;
	display: flex;
	justify-content: center;
	gap: 0.8rem;
`;

export const UnitButton = styled.button`
	padding: 0.4rem 0.8rem;
	border: none;
	border-radius: 0.8rem;
	background-color: #fafafa;
	background-color: #fff;
	font-size: 1.2rem;
`;

export const QuantityButtonWrapper = styled.div`
	grid-row: 1 / 2;
	grid-column: 3 / 4;
	display: flex;
	margin: 0 -0.4rem;
`;

export const ChangeQuantityButton = styled.button`
	padding: 0.4rem;
	border: none;
	background-color: transparent;
	border-radius: 50%;

	img {
		padding: 0.4rem;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.secondary};
	}
`;

export const CategoryButton = styled.button`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	border: none;
	border-radius: 8px;
	width: 100%;
	background-color: #fff;
	background-color: transparent;
	font-size: 1.6rem;

	span {
		padding-right: 0.8rem;
		translate: 0 -0.2rem;
	}
`;

export const CategoryIconCircle = styled(CategoryIcon)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
`;

export const ChevronRight = styled.img`
	margin-left: auto;
`;

export const ControlButtonWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.6rem;
`;

export const ControlChangesButton = styled.button<{ $isAbort: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
	padding: 0.8rem 1.6rem;
	border: 3px solid ${({ $isAbort }) => ($isAbort ? '#f55a5a' : '#56b93c')};
	border-radius: 100rem;
	font-size: 1.4rem;
	font-weight: bold;
	text-transform: uppercase;

	img {
		margin-left: -10px;
		translate: 0 1px;
	}
`;

export const ProductInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

export const EditPanel = ({ isOpen }) => {
	return (
		<Wrapper isOpen={isOpen} style={{ overlay: { zIndex: '1', backgroundColor: 'rgba(0, 0, 0, 0.25)' } }}>
			<ControlButtonWrapper>
				<ControlChangesButton $isAbort={true}>
					<img src='src/assets/icons/arrow-left-small.svg' alt='' />
					abort
				</ControlChangesButton>
				<ControlChangesButton $isAbort={false}>
					<img src='src/assets/icons/check-small.svg' alt='' />
					save
				</ControlChangesButton>
			</ControlButtonWrapper>
			<ProductInfoWrapper>
				<NameInput type='text' value='product name' />
				<CategoryButton type='button' aria-label='change product category'>
					<CategoryIconCircle as='div' $category={'other'} $isBought={false}>
						<img src={'src/assets/img/category-icons/other.png'} alt={`icon of category: ${'other'}`} />
					</CategoryIconCircle>
					<span>other</span>
					<ChevronRight src='src/assets/icons/chevron-right.svg' alt='' />
				</CategoryButton>
			</ProductInfoWrapper>
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
	);
};
