export function CupSelector() {
  const cups = [
    "mushroom",
    "flower",
    "star",
    "special",
    "shell",
    "banana",
    "leaf",
    "lightning",
  ];

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 w-96">
      {cups.map(cup => (
        <a href={`/records/${cup}`}>
          <img
            src={`/${cup}-cup.svg`}
            className="w-24 hover:p-[2px]"
            alt={`${cup} cup`}
          />
        </a>
      ))}
    </div>
  );
}
