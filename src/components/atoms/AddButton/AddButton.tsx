import styled from 'styled-components';

export const Wrapper = styled.button`
	position: fixed;
	bottom: 1.6rem;
	right: 1.6rem;
	display: flex;
	align-items: center;
	gap: 0.4rem;
	padding: 0.8rem 1.6rem 0.8rem 0.8rem;
	border: none;
	border-radius: 100rem;
	background-color: ${({ theme }) => theme.colors.secondary};
	color: #fff;
	box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.25);
	font-size: 1.6rem;
	font-weight: bold;
	text-transform: uppercase;
`;

export const AddButton = (props: any) => {
	return (
		<Wrapper type='button' {...props}>
			<img src='src/assets/icons/plus.svg' alt='' />
			Add
		</Wrapper>
	);
};
