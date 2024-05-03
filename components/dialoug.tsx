"use client"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import DynamicChart from "@/app/business-intelligence/dynamic_chart/page";

type ChartType = 'bar' | 'linechart' | 'piecharts' | 'donutcharts' | 'connectivitycharts' | 'scatterplots' | 'polarchart' | 'radarchart' | string;
export function DialogBox({ alt, src, chartType }: { alt: string; src: string, chartType: ChartType}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
                  src={src}
                  alt={alt}
                  width={100}
                  height={100}
                  className="w-[150px] h-[150px]"
                />
      </DialogTrigger>
      <DialogContent>
      <DynamicChart chartType={chartType} />

        {/* <Image
        src = {src}
        alt = {alt}
        width={800}
        height={800}
        /> */}
      </DialogContent>
    </Dialog>
  )
}
