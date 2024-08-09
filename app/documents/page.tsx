"use client";
import React, { useState } from 'react';
import { UploadDropzone, UploadButton } from "@/lib/utils";
import Image from 'next/image';
 
export default function Home() {

    const [imageUrl, setImageUrl] = useState<string | null>(null);
  return (
    <main className="flex flex-col items-center justify-between p-2 w-full gap-4 lg:p-24">
      <UploadDropzone
      appearance={{
        button:
          "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-lg bg-red-500 p-4 bg-none after:bg-orange-400",
        
      }}
      className='w-full h-[450px] border-dashed border-2 border-gray-300 rounded-lg'
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
            setImageUrl(res[0].url)
        
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {imageUrl && <ImageCard imageUrl={imageUrl} />}
    </main>
  );
}


function ImageCard({imageUrl}: {imageUrl: string}) {
  return (
    <div className="border-dashed border-2 border-gray-300 rounded-lg">
      <Image src={imageUrl} alt="Uploaded Image" width={900} height={900} />
    </div>
  );
}