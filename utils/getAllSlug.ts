
export default async function getAllSlug(): Promise<string[]> {
  const fetchSlugs = async (url: string): Promise<string[]> => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        
        return  data.slug ?? [];
      }
      throw new Error('Network response was not ok.');
    } catch (error) {
      console.error('Error fetching slugs:', error);
      return [];
    }
  };

  try {
    const pagesResponse = await fetchSlugs(`${process.env.NEXT_PUBLIC_URL}/api/getSlugs/getpages`);
    const resourcesResponse = await fetchSlugs(`${process.env.NEXT_PUBLIC_URL}/api/getSlugs/slugsresources`);
    const casestudiesResponse = await fetchSlugs(`${process.env.NEXT_PUBLIC_URL}/api/getSlugs/slugscasestudies`);

    const pagesSlugs = pagesResponse || [];
    const resourcesSlugs = (resourcesResponse || []).map((slug: string) => `resources/${slug}`);
    const casestudiesSlugs = (casestudiesResponse || []).map((slug: string) => `single-case-studies/${slug}`);

    const slug = [...pagesSlugs, ...resourcesSlugs, ...casestudiesSlugs];
   

    return slug;
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }
}