import { FC, Dispatch, SetStateAction } from 'react';

interface ICustomInput {
	placeholder: string;
	value: number;
	setValue: Dispatch<SetStateAction<number>>;
}

const CustomInput: FC<ICustomInput> = ({ placeholder, setValue, value }) => {
	return (
		<>
			<label
				htmlFor={placeholder}
				style={{
					font: '14px',
                    fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
					color: '#fff',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{placeholder}
			</label>
			<input
				id={placeholder}
				type="text"
				value={value}
				onChange={(e) => setValue(+e.target.value)}
				style={{
					border: 'none',
					borderRadius: 10,
					font: `14px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
					padding: 5,
				}}
			/>
		</>
	);
};

export default CustomInput;
