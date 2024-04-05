import { Bar, Wrapper } from './ProgressBar.styles';

type ProgressBarProps = {
	currentProgress: number;
};

export const ProgressBar = ({ currentProgress }: ProgressBarProps) => {
	return (
		<Wrapper>
			<Bar $currentProgress={currentProgress} />
		</Wrapper>
	);
};
