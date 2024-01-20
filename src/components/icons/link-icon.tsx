export default function LinkIcon({ color }
: {
    color: string
}) {
    return (
        <svg width={24} height={24}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2H0V1h16v1ZM0 5.5.5 5h15l.5.5v5l-.5.5H.5l-.5-.5v-5ZM1 6v4h14V6H1Zm-1 9h16v-1H0v1Z" fill={color}></path>
        </svg>
    );
}