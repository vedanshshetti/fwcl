export const copyToClipboard = async (
  text: string,
  onCompleteCb?: () => void,
) => {
  try {
    await navigator.clipboard.writeText(text);
    (onCompleteCb??(()=>console.log("completed")))();
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
