type Props = {
    onClick: () => void;
}
export function StarRepoButton({onClick}: Props) {
    return (
        <button 
            type="button"
            onClick={onClick}
        > Star </button>
    )
}

