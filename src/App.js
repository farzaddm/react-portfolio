import Header from "./components/ui/Header";
import MainLayout from "./components/layouts/main.layout";
import {Helmet} from "react-helmet-async";


function App() {
  return (
      <MainLayout>
        <Helmet><title>وب سایت شخصی فرزاد</title></Helmet>
        <Header/>
      </MainLayout>
  );
}

export default App;
