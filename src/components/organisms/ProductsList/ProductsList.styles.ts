import styled from 'styled-components';

export const Wrapper = styled.div`
	padding-bottom: 7rem;
	background-color: ${({ theme }) => theme.colors.lightGrey};
	overflow-y: auto;

	@media (min-width: 576px) {
		font-size: 1.8rem;
	}
`;
