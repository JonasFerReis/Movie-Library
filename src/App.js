import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Jogos</h1>
            <div Name="botao-container">
                <button id="nqueens">N Queens</button>
                <button id="sudoku">Sudoku</button>
                <button id="maze">Maze</button>
            </div>

            <dialog id="nqueens-modal">
                <form>
                    <label htmlFor="nqueens-input">Número de Rainhas:</label>
                    <input type="number" id="nqueens-input" name="nqueens-input" min="1" max="20" required/>
                    <button type="submit">Jogar</button>
                </form>
            </dialog>

            <dialog id="sudoku-modal">
                <form>
                    <table id="sudoku-grid">
                        <tbody>
                            <tr>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                            </tr>
                            <tr>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                            </tr>
                            <tr>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                            </tr>
                            <tr>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                            </tr>
                            <tr>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                            </tr>
                            <tr>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                            </tr>
                            <tr>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                            </tr>
                            <tr>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                            </tr>
                            <tr>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                                <td><input type="number" min="0" max="9" value="0"/></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit">Jogar</button>
                </form>
            </dialog>

            <dialog id="maze-modal">
                <button id="maze-solve">Resolver</button>
            </dialog>
        </div>
    );
}

export default App;
