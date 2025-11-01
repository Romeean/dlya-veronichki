  import Image from "next/image";

  export function StarField({ difficulty }: { difficulty: number }) {
    switch (difficulty) {
      case 1:
        return <Image width={80} height={30} alt="star-1" src="/star-1.svg" />;
      case 2:
        return <Image width={80} height={30} alt="star-2" src="/star-2.svg" />;
      case 3:
        return <Image width={80} height={30} alt="star-3" src="/star-3.svg" />;
      case 4:
        return <Image width={80} height={30} alt="star-4" src="/star-4.svg" />;
      case 5:
        return <Image width={80} height={30} alt="star-5" src="/star-5.svg" />;
      default:
        return null;
      }
  }
