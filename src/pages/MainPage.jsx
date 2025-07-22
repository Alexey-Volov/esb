import Header from "../components/mainPageComponents/Header";
import Benefits from "../components/mainPageComponents/Benefits";
import NewItems from "../components/mainPageComponents/NewItems";
import About from "../components/mainPageComponents/About";
import Realized from "../components/mainPageComponents/Realized";
import Hits from "../components/mainPageComponents/Hits";
import FormPrice from "../components/mainPageComponents/FormPrice";
import Contacts from "../components/mainPageComponents/Contacts";
import Footer from "../components/mainPageComponents/Footer";
const MainPage = () => {
    return ( 
        <>
            <Header/>
            <Benefits/>
            <NewItems/>
            <About/>
            <Realized/>
            <Hits/>
            <FormPrice title="Рассчитать стоимость" secontText text="Оставьте заявку на бесплатный рассчет стоимости Вашего проекта!"/>
            <Contacts/>
            <Footer/>
        </>
     );
}
 
export default MainPage;