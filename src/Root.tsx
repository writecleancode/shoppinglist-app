import { Header } from './components/atoms/Header/Header';
import { ProgressBar } from './components/atoms/ProgressBar/ProgressBar';
import { ItemsList } from './components/organisms/ItemsList/ItemsList';
import styled from 'styled-components';

export const FixedTop = styled.div`
	position: sticky;
	top: 0;
	z-index: 1;
	width: 100%;
`;

export const Root = () => {
	return (
		<>
			<FixedTop>
				<Header />
				<ProgressBar currentProgress={20} />
			</FixedTop>
			<ItemsList />
		</>
	);
};
