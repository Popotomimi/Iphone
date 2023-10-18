import { BsApple, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
        <ul>
            <li>
                <span className="insta-footer"> 
                 Outras formas de comprar: encontre uma <a href="#"> Apple Store </a> ou <br />
                 <a href="#"> Revendedor Apple</a> na sua região.
                Ou ligue para 0800-761-0867. <br />
                </span>
            </li>
        </ul>
        <span className="apple"><BsApple /> </span>
        <ul className="colunm-two">
            <li>
                <p className="title">
                    Descobrir e Comprar
                </p>
                <p>
                    <a href="#">
                        Loja
                    </a>
                </p>
                <p>
                    <a href="#">
                        Mac
                    </a>
                </p>
                <p>
                <a href="#">
                    iPad
                </a>
                </p>
            </li>
            <li>
                <p className="title">
                    Apple Store
                </p>
                <p>
                    <a href="#">
                        Encontre uma loja
                    </a>
                </p>
                <p>
                    <a href="#">
                        Genius Bar
                    </a>
                </p>
                <p>
                    <a href="#">
                        Today at Apple
                    </a>
                </p>
            </li>
        </ul>
    </footer>
  )
}

export default Footer;