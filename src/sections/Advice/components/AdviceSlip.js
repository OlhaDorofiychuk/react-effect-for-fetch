function AdviceSlip(props) {
  // props: advice, handleClick

  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{props.advice.advice}</p>
      <button onClick={props.handleClick}>Get More Advice</button>
      <button onClick={props.handleClick}>Save to Favourties</button>
    </section>
  );
}

export default AdviceSlip;
