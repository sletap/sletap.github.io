import Sahil from './images/sahil.png'
import './global.css';


export default function Header() {
  return (
      <section className="hero bg">
          <div className="hero-body">
                <figure class="image is-128x128 container">
                    <img 
                        class="is-rounded" 
                        alt="Sahil Patel" 
                        src={Sahil} 
                    />
                </figure>
                <p className="title has-text-white">
                    <div className="container has-text-centered">
                        Sahil Patel
                    </div>
                </p>
                <p className="subtitle has-text-white">
                    <div className="container has-text-centered">
                        Software Engineer
                    </div>
                </p>
          </div>
      </section>
  );
}

