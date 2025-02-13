
const CopyLinkIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
        strokeWidth={2}
        className={className}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12h3a3 3 0 0 1 0 6h-3m-6 0H6a3 3 0 1 1 0-6h3m-1 3h8M8 12a4 4 0 0 1 0-8h8a4 4 0 1 1 0 8"
        />
    </svg>
);

export default CopyLinkIcon;
