import Link from "next/link";

export function Block({
  href,
  title,
  subTitle,
  color,
}: {
  href: string;
  title: string;
  subTitle: string;
  color: string;
}) {
  const isHex = color.startsWith("#");

  return (
    <Link href={href}>
      <section
        className={`rounded-2xl p-6 text-white shadow-md transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer flex flex-col justify-center h-48 w-full ${
          !isHex ? color : ""
        }`}
        style={isHex ? { backgroundColor: color } : {}}
      >
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-base opacity-90">{subTitle}</p>
      </section>
    </Link>
  );
}
