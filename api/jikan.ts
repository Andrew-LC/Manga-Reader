async function searchManga(name: string) {
  const nameSlug: string = name.split(" ").join("+");

  const response = await fetch(`https://api.jikan.moe/v4/manga?q=${nameSlug}&limit=10`);
  let data = await response.json();

  data = data.data.sort((a: any, b: any) => {
    return b.score - a.score
  })

  return data;
}


async function getCount(name: string) {
  const slug = name.split(" ").join("-")
  const url = `http://localhost:3002/manga-details/${slug}`;
  const response = await fetch(url);
  const data = await response.json();

  return data.data.pages;
}


async function getManga(id: number) {
  const response = await fetch(`https://api.jikan.moe/v4/manga/${id}`);
  const dataJson = await response.json();

  const data = {
    title: dataJson.data.title,
    author: dataJson.data.authors[0].name,
    image_url: dataJson.data.images.jpg.large_image_url,
    status: dataJson.data.status,
    synopsis: dataJson.data.synopsis,
    genres: [dataJson.data.genres.map((genre: any) => { return genre.name })],
    score: dataJson.data.score,
    chapters: dataJson.data.chapters == null ? await getCount(dataJson.data.title) : dataJson.data.title
  }

  return data;
}


export { searchManga, getManga };
