import { LucideConstruction } from "lucide-react";

interface ICardGoal {
  title: string;
}

export function CardGoal({ title = "Add your new goal" }: ICardGoal) {
  return (
    <div className="flex flex-row items-start gap-2">
      <LucideConstruction size={20} strokeWidth={2.4} />
      <span>{title}</span>
    </div>
  );
}
