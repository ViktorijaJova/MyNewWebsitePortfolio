function truncateText(text: string, maxLength: number): string {
  const ellipsis = "...";

  if (text.length <= maxLength) {
    return text;
  }

  const truncatedText = text.slice(0, maxLength - ellipsis.length).trim();
  return truncatedText + ellipsis;
}

export default truncateText;