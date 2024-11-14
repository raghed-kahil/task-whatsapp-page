import Image, { StaticImageData } from "next/image"


export default function FutureCard($: {
    title: string
    description: string
    image: StaticImageData
}) {
    
    return (
        <div className="w-full">
            <Image src={$?.image} alt="future card" className="w-full mb-2" />
            <h3 className="text-lg font-bold mb-2">{$.title}</h3>
            <p className="text-muted-foreground">{$.description}</p>
        </div>
    )
};
