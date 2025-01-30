import { Response } from "@/types/internal.types"; 
import Bubbles from "./components/Bubbles/Bubbles";
export const dynamic = "force-dynamic";

async function getCoins(): Promise<Response> {
  const response = await fetch(
    "http://127.0.0.1:8080/market-data/stocks-info", 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        symbol: ["DELTA"],
        dateRange: "1y",
        interval: "1mo"
      }) 
    }
  );
  const data = await response.json();
  return data;
}

export default async function Main() {
  const coins = await getCoins();

  return <Bubbles coins={coins.data} />;
}
