import "./CarouselItem.css";

type CarouselItemProps = {
  active?: boolean;
  interval?: number;
  children: React.ReactNode;
};

export default function CarouselItem({
  active,
  interval,
  children,
}: CarouselItemProps) {
  return (
    <div
      className={`carousel-item${active ? " active" : ""}`}
      {...(interval ? { "data-bs-interval": interval } : {})}
    >
      {children}
    </div>
  );
}