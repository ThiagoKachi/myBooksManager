import axios from 'axios';

export async function getBookDetails(bookName: string) {
  const encodedQuery = encodeURIComponent(bookName.replace(/\s/g, '+'));

  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${encodedQuery}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}
