import config from '../config';

async function getAllCategoriesWithVideos() {
  const { URL_CATEGORIESWITHVIDEOS } = config;
  const res = await fetch(URL_CATEGORIESWITHVIDEOS);
  if (res.ok) {
    return res.json();
  }
  throw new Error('Não foi possível pegar os dados :c');
}

async function getAllCategories() {
  const { URL_CATEGORIES } = config;
  const res = await fetch(URL_CATEGORIES);
  if (res.ok) {
    return res.json();
  }
  throw new Error('Não foi possível pegar os dados :c');
}

async function create(object) {
  const { URL_CATEGORIES } = config;
  const res = await fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(object),
  });
  if (res.ok) {
    return res.json();
  }
  throw new Error('Não foi possível pegar os dados :c');
}

export default {
  getAllCategoriesWithVideos,
  getAllCategories,
  create,
};
