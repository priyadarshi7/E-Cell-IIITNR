import React from 'react'
import './Home.css'
import About from '../../Components/Home/About/About'
import Main from '../../Components/Home/Main/Main'
import OurEvents from '../../Components/Our Events/OurEvents'
import Gallery from '../../Components/Home/Gallery/Gallery'
import Navbar from '../../Components/Navbar/Navbar'
import Load from '../../Components/Load_Page/Load'

const Home = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Set a timer to change loading state after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = loading ? 'hidden' : 'visible';

    // Cleanup: reset overflow style when component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [loading]);

  return (
    <div className="home">
      {loading && <Load />}
      {!loading && <Navbar />}
      <Main />
      {!loading && <About />}
      {!loading && <Gallery />}
      {!loading && <OurEvents />}
    </div>
  );
}

export default Home;
