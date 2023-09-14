onmessage = function (e) {
    const decodeData = atob(e.data.base64Vector);
    const blobResult = new Blob([Uint8Array.from(decodeData, c => c.charCodeAt(0))])
    postMessage(blobResult);
};