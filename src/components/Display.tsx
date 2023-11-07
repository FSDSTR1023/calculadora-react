
interface Props {
    textContent: string;
    muted?: boolean;
}

const Display = ({ textContent, muted }: Props) => {
    return (
        <p
            className={`w-96 rounded-md overflow-x-auto ${muted ? 'text-gray-950 text-3xl h-14' : 'text-white text-5xl font-medium h-16'}`}>
            {textContent}
        </p>
    )
}

export default Display;