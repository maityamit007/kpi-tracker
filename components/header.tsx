import Button from "./button";

export default function Header({ handleClick }: { handleClick: (event?: React.MouseEvent<HTMLButtonElement>) => void }) {
  return (
    <header className="fixed top-0 w-full px-6 py-4 flex items-center flex-row-reverse justify-between">
      <Button onClick={handleClick}>Request</Button>
    </header>
  );
}
