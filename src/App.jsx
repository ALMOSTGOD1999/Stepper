import CheckoutStepper from "./components/stepper";

import "./App.css";

function App() {
  const CHECKOUT_STEPS = [
    {
      name: "customer info",
      Component: () => <div>provide your contact details.</div>,
    },
    {
      name: "shipping info",
      Component: () => <div>provide your shipping info.</div>,
    },
    {
      name: "payments",
      Component: () => <div>Give the money.</div>,
    },
    {
      name: "Delivery",
      Component: () => <div>Delivery done..</div>,
    },
  ];

  return (
    <>
      <div>
        <h1>The stepper.</h1>
        <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
      </div>
    </>
  );
}

export default App;
