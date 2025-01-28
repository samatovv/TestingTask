import { Footer } from "../../widgets/Footer"
import { Banner } from "./sections/Banner"
import { Distributors } from "./sections/Distributors"
import { HelpUs } from "./sections/HelpUs"
import { ProductByCategory } from "./sections/ProductByCategory"
import { Recommendation } from "./sections/Recommendation"
import { WhyWe } from "./sections/WhyWe"

export const HomePage = () => {
    return <div>
        <Banner/>
        <HelpUs/>
        <ProductByCategory/>
        <WhyWe/>
        <Distributors/>
        <Recommendation/>
        <Footer/>
    </div>
}