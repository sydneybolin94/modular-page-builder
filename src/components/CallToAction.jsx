import Button from "./button";

export default function CallToAction({ theme, headline, button }) {
  return (
    <section className="py-20 px-6 bg-zinc-600 text-center text-white" style={{ color: theme.text, backgroundColor: theme.background }}>
      <h2 className="text-3xl font-bold mb-6">{headline}</h2>
      <Button theme={theme} button={button} />
    </section>
  );
}
