import Button from "./button";

export default function Hero({ theme, imageUrl, headline, subhead, cta }) {
  return (
    <section className="w-full h-[400px] flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})`, color: theme.text }}>
      <h1 className="text-4xl font-bold mb-4">{headline}</h1>
      <p className="text-gray-600 text-lg mb-8">{subhead}</p>
      <Button theme={theme} button={cta} />
    </section>
  );
}
