import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../app';
import { Paths } from '../enum';
import { Auth, BookInfoPage, ContractPage, MainPage, TermsPage } from '../pages';

export const Routing = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index={true} element={<Navigate to={`${Paths.BOOKS}/all`} />} />
      <Route path={Paths.BOOKS} element={<MainPage />} />
      <Route path={`${Paths.BOOKS}/:category`} element={<MainPage />} />
      <Route path={Paths.TERMS} element={<TermsPage />} />
      <Route path={Paths.CONTRACT} element={<ContractPage />} />
    </Route>
    <Route path={Paths.AUTH} element={<Auth />} />
    <Route path={`${Paths.BOOKS}/:category/:id`} element={<BookInfoPage />} />
  </Routes>
);
