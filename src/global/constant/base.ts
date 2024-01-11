const BASE_URL = import.meta.env.MODE === 'production' ? import.meta.env.SITE : '';

export { BASE_URL };