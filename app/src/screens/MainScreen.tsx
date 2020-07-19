import React, { useContext, useEffect, useState } from 'react';

import NewsList from '../components/NewsList';
import { Context as NewsContext } from '../context/newsContext';
import { StyledView } from '../styledElements';

const MainScreen = () => {
  const [loading, setLoading] = useState(true);
  const { fetchNews, state } = useContext(NewsContext);

  useEffect(() => {
    fetchNews() && setLoading(false);
  }, []);

  return (
    <StyledView>
      <NewsList
        results={state.results}
        callback={fetchNews}
        isRefreshing={loading}
      />
    </StyledView>
  );
};

export default MainScreen;
