import { OrderCard } from "entities/order";
import "./styles/index.scss";
import { WithStore } from "./providers/with-store";

function App() {
  return (
    <WithStore>
      <div className="mx-auto mt-2 md:max-w-[500px]">
        <OrderCard />
      </div>
      
    </WithStore>
  );
}

export default App;
