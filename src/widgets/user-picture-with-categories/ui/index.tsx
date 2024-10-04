import { Category, useAppDispatch, useAppSelector } from '../../../shared';
import { setActiveIndex } from '../model';

export const UserPictureWithCategories = () => {
  const { categories, activeIndex } = useAppSelector((state) => state.editCategories);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-06 p-7 md:p-10 rounded-2xl flex flex-col gap-6 md:gap-10">
      <img src="/user.jpg" alt="user" className="w-full md:max-w-[280px] h-full max-h-[450px] object-cover rounded-lg" />
      <ul className="space-y-5 md:space-y-6">
        {categories.map((category, index) => (
          <Category key={index} isActive={activeIndex === index} onClick={() => dispatch(setActiveIndex(index))}>
            {category}
          </Category>
        ))}
      </ul>
    </div>
  );
};
