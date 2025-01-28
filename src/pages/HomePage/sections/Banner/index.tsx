import { Header } from "../../../../widgets/Header"
import image from "../../../../shared/assets/img/banner.png"
import { Contact } from "../Contact"
import { Container } from "../../../../shared/helpers"

export const Banner = () => {
    return <div>
        <div
            className="relative w-full h-[500px] md:h-screen bg-cover bg-center pt-[30px]"
            style={{
              backgroundImage: `linear-gradient(#0001, #000), url(${image})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
        >
            <Container>
                <Header/>
                <Contact/>
            </Container>
        </div>
    </div>
}