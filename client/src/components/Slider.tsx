import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,

} from "@/components/ui/carousel"

import Image from "next/image"

import Autoplay from 'embla-carousel-autoplay'

export default function Slider() {
  return (
    <Carousel className="w-full my-1 md:my-3 lg:mt-3"
    plugins={[
        Autoplay({
          delay: 10000,
        //   UserActivation:false
        }),
      ]}
    >
      <CarouselContent className="-ml-1 ">
        
          <CarouselItem className="pl-1 w-full">
            <div className="p-1">
              <Card className="aspect-auto shadow-md">
                <CardContent className="flex items-center justify-center p-6 h-80 md:h-96">
                  {/* <span className="text-2xl font-semibold">Banner#1</span>
                   */}
                   <Image src="/ca_banner1.png" fill alt="hello.com" className="object-cover"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 w-full">
            <div className="p-1">
              <Card className="aspect-auto shadow-md">
                <CardContent className="flex items-center justify-center p-6 h-80 md:h-96">
                  <span className="text-2xl font-semibold">Banner#2</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 w-full">
            <div className="p-1">
              <Card className="shadow-auto shadow-md">
                <CardContent className="flex  items-center justify-center p-6 h-80 md:h-96">
                  <span className="text-2xl font-semibold">Banner#3
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex"/>
      <CarouselNext className="hidden lg:flex"/>
    </Carousel>
  )
}
