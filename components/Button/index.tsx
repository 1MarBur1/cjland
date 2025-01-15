import { ButtonProps } from "./Button.props";

const Button = ({ className='', ...props }: ButtonProps) => {
	return (
		<button className={`bg-primary text-white font-extrabold rounded-xl ${className}`} {...props} />
	)
}

export default Button;
