import './global.css';

export default function AboutMe() {
  return (
      <section className="hero is-primary is-small">
          <div className="hero-body">
                <p className="title has-text-white has-text-centered">
                    <div className="container">
                        About Me
                    </div>
                </p>
                <p className="columns is-multiline subtitle has-text-white is-centered">
                    <div className="column has-text-centered">
                        <p className="has-text-centered">
                            Hello! I am an incoming software engineer at Redfin in San Francisco
                        </p>
                        <p className="has-text-centered">
                            I graduated from the University of Michigan in 2021 with a B.S.E. in Computer Science
                        </p>
                        <p className="has-text-centered">
                            I'm interested in building user friendly products, whether that means working in the frontend, backend, or anywhere else :)
                        </p>
                    </div>
                </p>
          </div>
      </section>
  );
}

