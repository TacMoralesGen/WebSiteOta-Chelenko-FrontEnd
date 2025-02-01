import "./Reserve.css";
import Header from "../../components/Header/Header";
import SelectDates from "../../components/Select-dates/SelectDates";
import SelectCabins from "../../components/Select-cabins/SelectCabins";
import ReserveResume from "../../components/Reserve-resume/reserve-resume";
import Footer from "../../components/Footer/Footer";


const Reserve = () => {
  return (
    <>
      <Header />
      <SelectDates />
      <section className="container">
        <div className="row">
          <SelectCabins />
          <ReserveResume />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Reserve;
