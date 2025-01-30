import { MarketInfoData } from "@/types/internal.types";
import Image from "next/image";

type Props = {
  coin: MarketInfoData;
};

export default function CoinName({ coin }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <Image width={48} height={48} src={`/assets/coins/${coin.symbol}.png`}  alt={coin.symbol} />
      <span className="hidden md:block">{coin.name.slice(0, 12)}</span>
      <span className="uppercase">{coin.symbol}</span>
    </div>
  );
}
