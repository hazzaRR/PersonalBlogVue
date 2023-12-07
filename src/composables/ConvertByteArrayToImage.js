export const getImageSrc = (base64String) => {
    if (!base64String) return null;

    const blob = new Blob([base64ToArrayBuffer(base64String)], { type: 'image/png' });
    return URL.createObjectURL(blob);
  }
export const base64ToArrayBuffer = (base64) => {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes.buffer;

  }