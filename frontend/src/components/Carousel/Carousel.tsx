import "./Carousel.css";

type CarouselProps = {
  children: any;
  id?: string;
};

export default function Carousel({ children, id }: CarouselProps) {
    return (
        <>
            <div
                className="carousel slide"
                data-bs-ride="carousel"
                id={id}
              >
                <div className="carousel-inner">
                    {children}
                </div>
                <a
                  className="carousel-control-prev"
                  href={"#" + id}
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="bi bi-caret-left-fill text-info display-6"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href={"#" + id}
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="bi bi-caret-right-fill text-info display-6"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
        </>
    )
}
