import Header from 'components/organisms/Header';
import Detail from 'components/organisms/Detail';
import Footer from 'components/organisms/Footer';
import Modal from 'components/atoms/Modal';

export default function App() {
  return (
    <div>
      <div className="relative antialiased mx-auto w-full max-w-app bg-white">
        {/* Header */}
        <Header />

        {/* Detail */}
        <Detail />

        {/* Footer */}
        <Footer />

        {/* Modal */}
        <Modal />
      </div>
    </div>
  );
}
