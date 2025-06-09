"use client";

import type React from "react";

import { useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, CheckCircle, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function UploadPage() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [analysisGoal, setAnalysisGoal] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadedFile(file);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleUploadAreaClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleContinue = () => {
    router.push("/overview");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Set Your Analysis Goal
        </h1>
        <p className="text-lg text-slate-600">
          Upload your data and tell us what insights you want to discover
        </p>
      </div>

      <div className="grid gap-8">
        {/* File Upload Area */}
        <Card>
          <CardContent className="p-8">
            {!uploadedFile ? (
              <div
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer ${
                  dragActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={handleUploadAreaClick}
              >
                {isUploading ? (
                  <div className="space-y-4">
                    <Upload className="w-12 h-12 text-blue-900 mx-auto animate-pulse" />
                    <div>
                      <p className="text-lg font-medium text-slate-900 mb-2">
                        Uploading...
                      </p>
                      <Progress
                        value={uploadProgress}
                        className="w-full max-w-xs mx-auto"
                      />
                      <p className="text-sm text-slate-600 mt-2">
                        {uploadProgress}% complete
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-12 h-12 text-slate-400 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-slate-900 mb-2">
                        Click here or drag and drop your file
                      </p>
                      <p className="text-slate-600 mb-4">
                        Select files from your computer
                      </p>
                      <Button variant="outline" className="pointer-events-none">
                        Browse Files
                      </Button>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="flex items-center">
                            <Info className="w-4 h-4 mr-1" />
                            Supported formats
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>CSV, Excel (.xlsx, .xls)</p>
                            <p>Max size: 100MB</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileInput}
                />
              </div>
            ) : (
              <div className="text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
                <div>
                  <p className="text-lg font-medium text-slate-900 mb-2">
                    File uploaded successfully!
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-slate-600">
                    <FileText className="w-4 h-4" />
                    <span>{uploadedFile.name}</span>
                    <span className="text-slate-400">•</span>
                    <span>
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Analysis Goal Input */}
        <div className="relative">
          <Textarea
            placeholder="What would you like to analyze in this data? For example: 'Analyze customer purchase patterns to identify key factors influencing buying decisions'"
            value={analysisGoal}
            onChange={(e) => setAnalysisGoal(e.target.value)}
            className="min-h-[100px] resize-none border-slate-200 focus-visible:ring-blue-500"
          />
        </div>

        {/* Continue Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-blue-900 hover:bg-blue-800 text-white px-8"
            disabled={!uploadedFile || !analysisGoal.trim()}
            onClick={handleContinue}
          >
            Continue to Data Overview
          </Button>
        </div>
      </div>
    </div>
  );
}
