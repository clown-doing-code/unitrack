type Props = {
  imageUrl: string;
  caption: string;
};

export default function ImageCard({ imageUrl, caption }: Props) {
  return (
    <figure className="w-[250px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-light dark:border-darkBorder dark:shadow-dark">
      <img className="aspect-[4/3] w-full" src={imageUrl} alt="image" />
      <figcaption className="border-t-2 border-border p-4 text-text dark:border-darkBorder">
        {caption}
      </figcaption>
    </figure>
  );
}
