import { Link } from "react-router-dom";

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to Repair Store!</h1>
            </header>
            <main>
                <p>Located in Beautiful Downtown Odisha Bhagabanpur, Repair Store provides a trained staff ready to meet your repair needs.</p>
                <p>&nbsp;</p>
                <address>
                    Repair Store<br />
                    555 Bhagabanpur Drive<br />
                    Puri, Brahmagiri 752011<br />
                    <a href="tel:+91123456789">+91123456789</a>
                </address>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content;
}
export default Public;