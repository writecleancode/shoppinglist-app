import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const LoadingGif = () => {
	return (
		<Wrapper>
			<img src='src/assets/img/loading.gif' alt='loading animation' />
		</Wrapper>
	);
};
