import React from 'react';
import { fetchUsers } from '../../../entities';
import { Typography, useAppDispatch } from '../../../shared';
import { ActiveUsers, Archive, Layout } from '../../../widgets';

export const HomePage = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Layout>
      <div className="space-y-8 md:space-y-10">
        <section className="mt-8 md:mt-10 space-y-4 md:space-y-7">
          <Typography variant="Title" className='className="w-full pb-4 border-b border-04"'>
            Активные
          </Typography>
          <ActiveUsers />
        </section>
        <section className="mt-8 md:mt-10 pb-10 space-y-4 md:space-y-7">
          <Typography variant="Title" className='className="w-full pb-4 border-b border-04"'>
            Архив
          </Typography>
          <Archive />
        </section>
      </div>
    </Layout>
  );
};
