import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';

const Page = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathName ? pathName : 'landing_page';

    async function loadData() {
      try {
        const data = await fetch(
          `http://localhost:1337/api/pages/?filters[slug]=${slug}&populate=deep`,
        );
        const json = await data.json();

        const mapPage = mapData(json.data);
        setPage(mapPage);
      } catch (e) {
        console.log(e);
        setPage(undefined);
      }
    }

    loadData();
  }, []);

  return <button onClick={() => console.log(page)}>clique</button>;
};

export default Page;
