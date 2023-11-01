interface Props {
    textContent: string;
    action: (event: React.MouseEvent<HTMLButtonElement>) => void;
    value: string;
    dark?: boolean;
    double?: boolean;
}

const Button = ({ textContent, action, value, dark = false, double = false }: Props) => {
    return (
        <button
            className={`rounded-md shadow-md text-2xl p-3 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-none transition-all duration-200  ${dark ? 'bg-teal-600' : 'bg-slate-100'} ${double ? 'col-span-2' : ''}`}
            data-value={value}
            onClick={action}>
            {textContent}
        </button>
    )
}

export default Button;