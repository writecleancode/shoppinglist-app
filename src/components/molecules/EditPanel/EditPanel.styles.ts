import styled from 'styled-components';
import { CategoryIcon } from 'src/components/atoms/CategoryIcon/CategoryIcon';

export const Wrapper = styled.div<{ $isOpen: boolean }>`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 2;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	padding: 1.2rem 0.8rem 1.6rem;
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
	width: 100%;
	background-color: #fff;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.18);
	translate: ${({ $isOpen }) => ($isOpen ? '0 0' : '0 104%')};
	pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
	transition: translate 0.3s;

	&:focus {
		outline: none;
	}

	@media (min-width: 380px) {
		padding: 1.6rem;
	}
`;

export const ControlChangesButtonsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.6rem;
`;

export const ControlChangesButton = styled.button<{ $isAbort?: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
	padding: 0.8rem 1.6rem;
	border: 3px solid ${({ $isAbort }) => ($isAbort ? '#f55a5a' : '#56b93c')};
	border-radius: 100px;
	background-color: #fff;
	font-size: 1.4rem;
	text-transform: uppercase;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);

	img {
		margin-left: -10px;
		translate: 0 1px;
	}
`;

export const MainInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;

	@media (min-width: 540px) {
		flex-direction: row;
		align-items: center;
	}
`;

export const StyledInput = styled.input`
	margin-top: auto;
	margin-bottom: auto;
	padding: 0.8rem;
	border: none;
	border-radius: 8px;
	background-color: #f0f0f0;
	font-size: 1.4rem;
	width: 100%;

	&:focus {
		outline-color: ${({ theme }) => theme.colors.secondary};
	}
`;

export const NameInput = styled(StyledInput)`
	font-size: 1.6rem;
	color: #222;
`;

export const CategoryButton = styled.button`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	border: none;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	border-bottom-left-radius: 20px;
	border-top-left-radius: 20px;
	width: 100%;
	background-color: #fff;
	background-color: transparent;
	font-size: 1.6rem;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);

	@media (min-width: 540px) {
		min-width: 280px;
		max-width: 280px;
	}

	span {
		translate: 0 -0.1rem;
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

export const QuantityWrapper = styled.div`
	display: grid;
	grid-template-rows: repeat(2, auto);
	grid-template-columns: repeat(3, auto);
	gap: 0.8rem;

	@media (min-width: 500px) {
		display: flex;
		align-items: center;
	}
`;

export const QuantityInput = styled(StyledInput)`
	grid-row: 1 / 2;
	grid-column: 1 / 2;

	@media (min-width: 500px) {
		width: max-content;
	}

	@media (min-width: 540px) {
		margin-right: 0.8rem;
	}
`;

export const UnitInput = styled(StyledInput)`
	grid-row: 1 / 2;
	grid-column: 2 / 3;

	@media (min-width: 500px) {
		max-width: max-content;
	}
`;

export const UnitButtonsWrapper = styled.div`
	grid-row: 2 / 3;
	grid-column: 1 / 4;
	display: flex;
	justify-content: center;
	gap: 0.8rem;
`;

export const UnitButton = styled.button<{ $isCurrentUnit: boolean }>`
	padding: 0.4rem 0.8rem;
	border: none;
	border-radius: 8px;
	background-color: #fafafa;
	background-color: ${({ $isCurrentUnit }) => ($isCurrentUnit ? '#d4e8ff' : '#fff')};
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
	font-size: 1.2rem;
`;

export const QuantityButtonWrapper = styled.div`
	grid-row: 1 / 2;
	grid-column: 3 / 4;
	display: flex;
	justify-content: flex-end;
	margin: 0 -0.4rem;

	@media (min-width: 520px) {
		margin-left: auto;
	}
`;

export const ChangeQuantityButton = styled.button`
	padding: 0.4rem;
	border: none;
	border-radius: 50%;
	background-color: transparent;

	img {
		padding: 0.4rem;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.secondary};
	}
`;
