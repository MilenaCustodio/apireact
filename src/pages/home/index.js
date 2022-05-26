import { Link } from "react-router-dom";

export default function index() {
    return (
        <main>
            <h1> Home </h1>

            <ul>
                <li> <Link to='/corprimaria'> Cor Primária </Link></li>
                <li> <Link to='/frequencia'> Frequencia </Link></li>
                <li> <Link to='/ingresso'> ingresso </Link></li>
                <li> <Link to='/maiorNumero'> Maior Número </Link></li>
            </ul>
        </main>
    )
}