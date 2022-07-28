export interface IEmptyStateProps {
  icon: JSX.Element;
  text: string;
}

export default function EmptyState({ icon, text }: IEmptyStateProps) {
  return (
    <section className="flex flex-col items-center">
      <div className="text-8xl text-center">{icon}</div>
      <h3 className="text-2xl">{text}</h3>
    </section>
  );
}
