import Image from "next/image";


export const ImgSlider = ({ link }) => {
    return (
        <Image loading="lazy" className="w-full lg:w-[30rem]" height={100} width={100} src={link} alt="carruselImg" />
    );
}