export function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    () => {
      console.log("Content copied to clipboard");
      /* Resolved - text copied to clipboard successfully */
    },
    () => {
      console.error("Failed to copy");
      /* Rejected - text failed to copy to the clipboard */
    }
  );

  // As of now it works only in chromium based browsers 
  //   navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
  //     if (result.state == "granted" || result.state == "prompt") {
  //       navigator.clipboard.writeText(text).then(
  //         () => {
  //           console.log("Content copied to clipboard");
  //           /* Resolved - text copied to clipboard successfully */
  //         },
  //         () => {
  //           console.error("Failed to copy");
  //           /* Rejected - text failed to copy to the clipboard */
  //         }
  //       );
  //     } else {
  //       alert(texts.errors.clipboard);
  //     }
  //   });
}
