
export async function requestAndEnableWebcam() {
    if (!navigator.mediaDevices.getUserMedia) {
        return { success: false, stream: undefined };
    }

    const result = await navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        return { success: true, stream }
    })
    .catch(err => {
        console.error("Can't access webcam");
        return { success: false, stream: undefined }
    });

    return result;
}


export function takeScreenshot(videoElement) {
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height );

    const image = canvas.toDataURL('image/jpeg');

    return image;
}