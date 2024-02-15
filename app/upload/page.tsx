'use client';
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
  public_id: string
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');

  return (
    <div>
      { publicId && <CldImage src={publicId} width={270} height={180} alt='testing' /> }
      
      {/* uploadPreset: https://console.cloudinary.com/settings/c-4127c1b4dbabe82a93d695f613be19/upload */}
      <CldUploadWidget
        uploadPreset="paahm2om"
        onUpload={(result, widget) => {
          if(result.event !== 'success') return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5
        }}
      >
        {({ open }) => {
          return (
            <button className='btn btn-primary' onClick={() => open()}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  )
}

export default UploadPage
