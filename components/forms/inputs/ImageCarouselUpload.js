"use client";

import { X, Upload, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function ImageUploadCarousel({ onRemove, onUpload, images = [] }) {
    return (
        <Card className="p-6">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Upload Images</h3>
                    <p className="text-sm text-muted-foreground">
                        {images.length} {images.length === 1 ? "image" : "images"}
                    </p>
                </div>

                <Carousel className="w-full max-w-md mx-auto">
                    <CarouselContent>
                        {images.map((src, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card className="overflow-hidden relative">
                                        <div className="aspect-square relative bg-muted flex items-center justify-center">
                                            <img
                                                src={src}
                                                alt={`Preview ${index + 1}`}
                                                className="object-cover w-full h-full"
                                            />
                                            <Button
                                                variant="destructive"
                                                size="icon-sm"
                                                className="absolute top-2 right-2"
                                                onClick={() => onRemove(index)}
                                            >
                                                <X />
                                            </Button>
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}

                        <CarouselItem>
                            <div className="p-1">
                                <Card className="border-dashed">
                                    <div className="aspect-square flex flex-col items-center justify-center gap-2 text-muted-foreground">
                                        <ImageIcon className="size-12" />
                                        <p className="text-sm">Add more images</p>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </Card>
    );
}