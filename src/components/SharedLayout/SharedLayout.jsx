import MainSection from 'components/common/Main/Main';

export default function SharedLayout() {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <MainSection />
      <footer style={{ height: '414px', backgroundColor: '#22252A' }}></footer>
    </>
  );
}
