import Image from "next/image";
import nextImg from "@/app/Syden_Iona_V2.png";
export default function Dashboard(){
    return (
        <div className="p-8">  
            <Image
                src={nextImg}
                alt="Syden Iona"
                width={300}
                height={300}
                quality={100}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700"
            />
        </div>
    );
}