import Image from "next/image";
import star_1 from "@public/star-1.svg";
import star_2 from "@public/star-2.svg";
import star_3 from "@public/star-3.svg";
import star_4 from "@public/star-4.svg";
import star_5 from "@public/star-5.svg";

export function StarField({ difficulty }: { difficulty: number }) {
  switch (difficulty) {
    case 1:
      return <Image width={80} height={30} alt="star-1" src={star_1} />;
    case 2:
      return <Image width={80} height={30} alt="star-2" src={star_2} />;
    case 3:
      return <Image width={80} height={30} alt="star-3" src={star_3} />;
    case 4:
      return <Image width={80} height={30} alt="star-4" src={star_4} />;
    case 5:
      return <Image width={80} height={30} alt="star-5" src={star_5} />;
  }
}
