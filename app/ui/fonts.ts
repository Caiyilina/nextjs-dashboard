import { Inter, Lusitana } from "next/font/google";

// 使用 Inter 字体作为主要字体
export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
