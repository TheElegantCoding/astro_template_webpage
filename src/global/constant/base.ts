const BASE_URL = import.meta.env.MODE === 'production' ? import.meta.env.BASE_URL : '';

export { BASE_URL };