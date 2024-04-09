import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
`;

export const SearchInput = styled.input`
	padding: 0.8rem 1.6rem;
	padding-right: 3.6rem;
	border: none;
	border-radius: 100rem;
	color: inherit;
	font-size: 1.6rem;
	max-width: 220px;

	@media (min-width: 340px) {
		max-width: none;
	}
`;

export const ClearInputButton = styled.button`
	position: absolute;
	top: 50%;
	right: 0;
	translate: 0 -50%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.7rem;
	border: none;
	width: 24px;
	height: 24px;
	background-color: transparent;
	transition: opacity 0.15s;

	&:hover {
		opacity: 0.7;
	}
`;
