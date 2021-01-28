import './global.css';


export default function Links() {
  return (
      <section className="hero is-success is-small">
          <div className="hero-body">
                <p className="title has-text-white">
                    <div className="container has-text-centered">
                        Me
                    </div>
                </p>
                {/* <div className="container has-text-centered"> */}
                <div className="buttons columns is-centered">

                    <button class="column is-narrow button is-outlined is-white">
                        <a href='https://linkedin.com/in/sletap' rel='noreferrer' target="_blank">
                            <span class="icon">
                                <i class="fab fa-linkedin-in"></i>
                            </span>
                            <span> LinkedIn </span>
                        </a>
                    </button>

                    <button class="column is-narrow button is-outlined is-white">
                        <a href='https://github.com/sletap' rel='noreferrer' target="_blank">
                            <span class="icon">
                                <i class="fab fa-github"></i>
                            </span>
                            <span> GitHub </span>
                        </a>
                    </button>

                    <button class="column is-narrow button is-outlined is-white">
                        <a href='mailto:sletap@umich.edu' rel='noreferrer' target="_blank">
                            <span class="icon">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span> Email </span>
                        </a>
                    </button>
                </div>
          </div>
      </section>
  );
}

