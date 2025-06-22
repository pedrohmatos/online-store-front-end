import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import photo1 from "/assets/1.png";
import photo2 from "/assets/2.png";
import photo3 from "/assets/3.png";
import photo4 from "/assets/4.png";
import photo5 from "/assets/5.png";

const Slide = () => {

    const slides: { url: string }[] = [
        {
            url: photo1
        },
        {
            url: photo2
        },
        {
            url: photo3
        },
        {
            url: photo4
        },
        {
            url: photo5
        }
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isFading, setIsFading] = useState<boolean>(false);

    const prevSlide = (): void => {
        setIsFading(true);

        setTimeout(() => {
            const newIndex: number = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);

            setIsFading(false);
        }, 500);

    };

    const nextSlide = (): void => {
        setIsFading(true);

        setTimeout(() => {
            const newIndex: number = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);

            setIsFading(false);
        }, 500);

    };

    const goToSlide = (slideIndex: number): void => {
        setCurrentIndex(slideIndex);
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => {
            clearInterval(interval);
        };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

    return (
        <figure className="max-w-[2000px] lg:h-[580px] w-full m-auto pt-8 sm:pt-14 lg:pt-0 rounded-b-md relative group">
            <div className="w-full h-full duration-500 flex flex-col items-center lg:flex lg:flex-row lg:items-stretch">
                {/* Text on the left */}
                <div className="w-8/12 md:w-2/3 lg:w-1/2 flex justify-end items-center">

                    <div className="flex flex-col gap-y-2 py-3 w-full lg:w-fit">
                        <h1 className="text-center text-[5.2vw] md:text-4xl font-semibold sm:font-medium uppercase">Modelo do aparelho</h1>
                        <p className="text-center">Breve descrição do aparelho</p>
                        <button className="border border-black w-fit p-1 sm:p-2 rounded mx-auto" type="button"
                        >
                            Botão de acesso
                        </button>
                    </div>

                </div>

                {/* Render current image */}
                <div className="w-8/12 md:w-1/2 flex items-center justify-center">
                    <img
                        src={slides[currentIndex].url}
                        alt={`slide-${currentIndex}`}
                        className={`
                            md:w-full max-h-[450px] object-contain xl:object-left xl:pl-6
                            transition-opacity duration-500 ease-in-out 
                            ${isFading ? "opacity-0" : "opacity-100"}
                        `}
                    />
                </div>
            </div>

            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 xl:left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 xl:right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            {/* Dots */}
            <div className="flex top-4 justify-center py-2">
                {
                    slides.map((_slide, slideIndex) => {
                        return (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className="text-2xl cursor-pointer"
                                aria-label={`Vai para o slide ${slideIndex + 1}`}
                            >
                                <RxDotFilled />
                            </div>
                        )
                    })
                }
            </div>
        </figure>
    )
}

export default Slide;