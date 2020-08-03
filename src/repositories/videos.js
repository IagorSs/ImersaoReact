import config from '../config';

async function create(object) {
  const { URL_VIDEOS } = config;

  const JSONbody = JSON.stringify({
    title: object.title,
    url: object.url,
    categoriaId: parseInt(object.categoriaId, 10),
  });

  const res = await fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSONbody,
  });
  if (res.ok) {
    return res.json();
  }
  throw new Error('Não foi possível pegar os dados :c');
}

export default {
  create,
};
