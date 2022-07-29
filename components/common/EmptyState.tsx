export interface IEmptyStateProps {
  icon: JSX.Element;
  text: string;
}

export default function EmptyState({ icon, text }: IEmptyStateProps) {
  return (
    <article className="flex flex-col items-center">
      <span className="text-8xl text-center">{icon}</span>
      <h3 className="text-2xl">{text}</h3>
    </article>
  );
}
