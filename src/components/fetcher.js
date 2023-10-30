export const fetcher = path =>
  fetch(`https://tt.chadsoft.co.uk${path}`).then(res => res.json());
