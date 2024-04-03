  
  function extractVideoId(url: string | null): string | null {
    if (!url) {
      return null;
    }
    const match = url.match(
      /(?:youtu.be\/|youtube.com\/(?:watch\?.*v=|embed\/))([\w-]{11})/
    );
    return match ? match[1] : null;
  }

export default extractVideoId;