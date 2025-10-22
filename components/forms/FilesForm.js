"use client";

import { UploadIcon, CheckCircle2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function FileUploadForm({ files, onFileChange, onSubmit }) {
    return (
        <Card className="p-6 animate-fadeSlideIn">
            <form onSubmit={onSubmit} className="space-y-4">
                <h2 className="text-lg font-semibold">Upload Files</h2>

                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <label className="flex flex-1 items-center justify-between rounded-md border p-3 cursor-pointer hover:bg-muted/50 transition-colors">
                            <span className="text-sm font-medium">Vendas XLSX</span>

                            {files.sales ? (
                                <div className="flex items-center gap-2 text-green-600">
                                    <span className="text-xs truncate max-w-[120px]">{files.sales.name}</span>
                                    <CheckCircle2Icon className="size-4 shrink-0" />
                                </div>
                            ) : (
                                <span className="text-xs text-muted-foreground">Choose file</span>
                            )}

                            <input
                                type="file"
                                accept=".xlsx"
                                className="hidden"
                                onChange={(e) => onFileChange("sales", e.target.files[0])}
                            />
                        </label>
                    </div>

                    <div className="flex items-center gap-3">
                        <label className="flex flex-1 items-center justify-between rounded-md border p-3 cursor-pointer hover:bg-muted/50 transition-colors">
                            <span className="text-sm font-medium">NFEs XLSX</span>

                            {files.nfes ? (
                                <div className="flex items-center gap-2 text-green-600">
                                    <span className="text-xs truncate max-w-[120px]">{files.nfes.name}</span>
                                    <CheckCircle2Icon className="size-4 shrink-0" />
                                </div>
                            ) : (
                                <span className="text-xs text-muted-foreground">Choose file</span>
                            )}

                            <input
                                type="file"
                                accept=".xlsx"
                                className="hidden"
                                onChange={(e) => onFileChange("nfes", e.target.files[0])}
                            />
                        </label>
                    </div>

                    <div className="flex items-center gap-3">
                        <label className="flex flex-1 items-center justify-between rounded-md border p-3 cursor-pointer hover:bg-muted/50 transition-colors">
                            <span className="text-sm font-medium">XML ZIP</span>

                            {files.xml ? (
                                <div className="flex items-center gap-2 text-green-600">
                                    <span className="text-xs truncate max-w-[120px]">{files.xml.name}</span>
                                    <CheckCircle2Icon className="size-4 shrink-0" />
                                </div>
                            ) : (
                                <span className="text-xs text-muted-foreground">Choose file</span>
                            )}

                            <input
                                type="file"
                                accept=".zip"
                                className="hidden"
                                onChange={(e) => onFileChange("xml", e.target.files[0])}
                            />
                        </label>
                    </div>

                    <div className="flex items-center gap-3">
                        <label className="flex flex-1 items-center justify-between rounded-md border p-3 cursor-pointer hover:bg-muted/50 transition-colors">
                            <span className="text-sm font-medium">PDF ZIP</span>

                            {files.pdf ? (
                                <div className="flex items-center gap-2 text-green-600">
                                    <span className="text-xs truncate max-w-[120px]">{files.pdf.name}</span>
                                    <CheckCircle2Icon className="size-4 shrink-0" />
                                </div>
                            ) : (
                                <span className="text-xs text-muted-foreground">Choose file</span>
                            )}

                            <input
                                type="file"
                                accept=".zip"
                                className="hidden"
                                onChange={(e) => onFileChange("pdf", e.target.files[0])}
                            />
                        </label>
                    </div>
                </div>

                <Button type="submit" className="w-full">
                    <UploadIcon />
                    Upload Files
                </Button>
            </form>
        </Card>
    );
}