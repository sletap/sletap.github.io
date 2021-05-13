import './global.css';


export default function OtherProjects() {
  return (
      <section className="hero is-info is-small">
          <div className="hero-body">
                <p className="title has-text-white">
                    <div className="container has-text-centered">
                        Other Projects
                    </div>
                </p>
                <p className="subtitle has-text-white">
                    <div className="container has-text-centered">
                        Distributed Key Value Store with Sharding and Paxos
                    </div>
                    <div className="container has-text-centered">
                        Fault Tolerant MapReduce Engine
                    </div>
                    <div className="container has-text-centered">
                        <a href='https://github.com/mewil/woozy' rel='noreferrer' target='_blank'> Woozy: Safe Drunk Texting   </a>
                    </div>
                    <div className="container has-text-centered">
                        <a href='https://github.com/sletap/RLStatsBot' rel='noreferrer' target='_blank'> Rocket League Reddit Bot </a>
                    </div>
                </p>
          </div>
      </section>
  );
}

