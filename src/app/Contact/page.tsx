import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigateButton from "@/components/NavigateButton";

const Contactpage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-7xl font-bold flex justify-center mt-44 tracking-widest">
         Welcome to Contact Page
      </h1>
      <p className="text-2xl font-bold flex justify-center text-gray-500 tracking-wide mt-2">
        This is contact page
      </p>
      <div className="flex justify-center items-center mt-8 space-x-4">
      <NavigateButton destination="/" label="Go to Home Page" />
      <NavigateButton destination="/About" label="Go to About Page" />
      </div>
      <Footer />
    </div>
  );
};

export default Contactpage;
