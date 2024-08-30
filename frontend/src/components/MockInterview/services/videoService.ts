// videoService.ts

export const uploadVideo = async (videoBlob: Blob): Promise<string> => {
    // Implement API call to upload video
    const formData = new FormData();
    formData.append('video', videoBlob);
  
    const response = await fetch('/api/videos', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    return data.videoUrl;
  };
  