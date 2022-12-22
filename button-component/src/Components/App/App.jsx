import Button from "../Button/Button";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <div className="App">
          <h1>Styled Button Component</h1>
          <div className="containerTop">
            <div className="row">
              <div className="col">
                <span>{`<Button />`}</span>
                <Button />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <span>{`<Button variant="outline" />`}</span>
                <Button variant="outline" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <span>{`<Button variant="text" />`}</span>
                <Button variant="text" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <span>{`<Button disableShadow />`}</span>
                <Button disableShadow />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <span>{`<Button disabled />`}</span>
                <Button disabled />
              </div>

              <div className="col">
                <span>{`<Button variant="text" disabled />`}</span>
                <Button variant="text" disabled />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <span>{`<Button startIcon="local_grocery_store" />`}</span>
                <Button startIcon="local_grocery_store" />
              </div>

              <div className="col">
                <span>{`<Button endIcon="local_grocery_store" />`}</span>
                <Button endIcon="local_grocery_store" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <span>{`<Button size="sm" />`}</span>
                <Button size="sm" />
              </div>

              <div className="col">
                <span>{`<Button size="md" />`}</span>
                <Button size="md" />
              </div>

              <div className="col">
                <span>{`<Button size="lg" />`}</span>
                <Button size="lg" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <span>{`<Button color="default" />`}</span>
                <Button color="default" />
              </div>

              <div className="col">
                <span>{`<Button color="primary" />`}</span>
                <Button color="primary" />
              </div>

              <div className="col">
                <span>{`<Button color="secondary" />`}</span>
                <Button color="secondary" />
              </div>

              <div className="col">
                <span>{`<Button color="danger" />`}</span>
                <Button color="danger" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <span>{`<Button color="default" variant="outline" />`}</span>
                <Button color="default" variant="outline" />
              </div>

              <div className="col">
                <span>{`<Button color="primary" variant="outline" />`}</span>
                <Button color="primary" variant="outline" />
              </div>

              <div className="col">
                <span>{`<Button color="secondary" variant="outline" />`}</span>
                <Button color="secondary" variant="outline" />
              </div>

              <div className="col">
                <span>{`<Button color="danger" variant="outline" />`}</span>
                <Button color="danger" variant="outline" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <span>{`<Button color="default" variant="text" />`}</span>
                <Button color="default" variant="text" />
              </div>

              <div className="col">
                <span>{`<Button color="primary" variant="text" />`}</span>
                <Button color="primary" variant="text" />
              </div>

              <div className="col">
                <span>{`<Button color="secondary" variant="text" />`}</span>
                <Button color="secondary" variant="text" />
              </div>

              <div className="col">
                <span>{`<Button color="danger" variant="text" />`}</span>
                <Button color="danger" variant="text" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <span className="footer">
          created by <u>mhdfuhad</u> - devChallenges.io
        </span>
      </footer>
    </>
  );
}

export default App;
