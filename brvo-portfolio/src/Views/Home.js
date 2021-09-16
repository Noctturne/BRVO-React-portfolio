import BasicLayout from '../layout/BasicLayout';

function Home() {
  return (
    <BasicLayout>
       <main className="home-main d-flex flex-grow-1 justify-content-center justify-content-md-start align-items-center px-md-4">
          <section className="hero position-absolute top-50 start-50 translate-middle">
              <h2 className="hero-title">
                  I am <span className="text-secondary"> John Doe </span>
              </h2>
              <h1 className="hero-description display-1 fw-bold">
                  Photographer
              </h1>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </section>
       </main>
    </BasicLayout>
  );
}

export default Home;
