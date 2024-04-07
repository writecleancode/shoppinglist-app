import { FixedTop } from 'src/components/atoms/StyledFixedTop/FixedTop';
import { Header } from 'src/components/atoms/Header/Header';
import { ProgressBar } from 'src/components/atoms/ProgressBar/ProgressBar';
import { ItemsList } from 'src/components/organisms/ItemsList/ItemsList';
import { AddButton } from 'src/components/atoms/AddButton/AddButton';
import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	height: 100dvh;
	
	display: flex;
	flex-direction: column;
`;

type MainViewProps = {
	showAdditemView: () => void;
};

export const MainView = ({ showAdditemView }: MainViewProps) => {
	return (
		<Wrapper>
			<div>
				{/* <FixedTop> */}
				<Header />
				<ProgressBar currentProgress={20} />
				{/* </FixedTop> */}
			</div>
			<ItemsList />
			<AddButton onClick={showAdditemView} />
		</Wrapper>
	);
};
