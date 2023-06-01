const basePath = 'https://api.giphy.com/v1/gifs/search?q=';
const apiKey = "api_key=b8cdOh6NtzUd44Zn7UTJT630qubZ6Gr6";
const uriParams = '&limit=10&rating=g&';
const defaultURL = "https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg";

export const getGifs = async (category) => {
    const url = `${basePath}${encodeURI(category)}${uriParams}${apiKey}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images ? img.images.downsized_medium.url : defaultURL,
      };
    });
    return gifs;
  };
