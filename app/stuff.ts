export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Copied to clipboard!");
    // Optional: Show a toast notification here
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};