import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Popup, closePopup } from '../../../entities';
import { EditForm, fetchUser } from '../../../features';
import { Typography, useAppDispatch } from '../../../shared';
import BackarrowSvg from '../../../shared/assets/backarrow.svg?react';
import { Layout, UserPictureWithCategories } from '../../../widgets';

export const EditPage = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { userId } = useParams();

  React.useEffect(() => {
    dispatch(fetchUser(Number(userId)));

    return () => {
      dispatch(closePopup());
    };
  }, []);

  return (
    <Layout>
      <div className="space-y-6 pb-8">
        <div className="flex items-center py-5 gap-2 w-fit cursor-pointer" onClick={() => navigate(-1)}>
          <BackarrowSvg />
          <Typography variant="Heading">Назад</Typography>
        </div>
        <section className="flex flex-col md:flex-row gap-8">
          <UserPictureWithCategories />
          <div className="flex-1 bg-06 p-7 md:p-10 rounded-2xl space-y-5 md:space-y-6">
            <Typography variant="Title" className='className="w-full pb-4 border-b border-04"'>
              Данные профиля
            </Typography>
            <EditForm />
          </div>
        </section>
      </div>
      <Popup />
    </Layout>
  );
};
