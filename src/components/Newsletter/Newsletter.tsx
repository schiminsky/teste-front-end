import './Newsletter.scss';

const Newsletter = () => {
  return (
    <section className="newsletter-container">
      <div className="newsletter-content">
        <div className="text-side">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>

        <div className="form-side">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input type="text" placeholder="Digite seu nome" />
              <input type="email" placeholder="Digite seu e-mail" />
              <button type="submit">INSCREVER</button>
            </div>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Aceito os termos e condições</span>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;