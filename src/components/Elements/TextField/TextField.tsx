import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";
import cn from "classnames";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	value: string;
	onChangeValue: (e: string) => void;
}

export const TextField: FC<TextFieldProps> = ({ onChangeValue, value, className, ...inputProps }) => {
	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => onChangeValue(e.target.value);

	return <input className={cn("", [className])} value={value} onChange={changeHandler} type="text" {...inputProps} />;
};
