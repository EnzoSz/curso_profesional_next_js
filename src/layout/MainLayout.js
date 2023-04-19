import Headers from '@components/Headers';
import Nav from '@common/Nav';
export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Headers />
        <Nav />
        <main>
          <div className="max-w-7x1 mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
