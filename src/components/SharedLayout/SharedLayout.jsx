import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer'

export default function SharedLayout() {
  return (
    <>
      <h1>Header</h1>
      <h1> 1 </h1>
      <h1> 2 </h1>
      <h1> 3 </h1>
      <h1> 5 </h1>
      <h1> 6 </h1>
            <h1>7</h1>
      <h1> 8 </h1>
            <h1>9</h1>
      <h1> 10 </h1>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
