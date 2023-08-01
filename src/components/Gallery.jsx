import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from '../AppContext';

const url =
  'https://api.unsplash.com/search/photos?client_id=UGsL0s5j5iMjfJOPK6nKFtzLDXa1LwoYIj34SllBZ4s';

const Gallery = () => {
  const { searchValue } = useGlobalContext();

  const { isLoading, data, isError } = useQuery({
    queryKey: ['images', searchValue],
    queryFn: () => axios.get(`${url}&query=${searchValue}`),
  });

  if (isLoading) {
    return <section className="loading image-container"></section>;
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>there was an error</h4>
      </section>
    );
  }

  const results = data.data.results;

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>no image found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
            style={{ width: '150px' }}
          />
        );
      })}
    </section>
  );
};

export default Gallery;
