import { education, skills } from "../profile";
import Layout from "./Layout";

const Index = () => (
  <Layout>
    <header className="row py-3">
      <div className="col-md-12">
        <div className="card card-body bg-light rounded-3">
          <div className="row">
            <div className="col-md-4">
              <img
                className="w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"
                alt="Profile Image"
              />
            </div>
            <div className="col-md-8">
              <h1>Laureano Vera</h1>
              <h3 className="fs-5">Frontend Developer</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti vel voluptatum, laboriosam fugit, explicabo enim
                praesentium numquam impedit harum sequi eum accusamus mollitia
                eius officiis et obcaecati ducimus at! Fuga.
              </p>
              <a href="/contact" className="btn btn-outline-primary">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Second Section */}
    <div className="row">
      <div className="col-md-4 py-1">
        <div className="card bg-light">
          <div className="card-body ">
            <h2 className="fs-4 text-uppercase">Skills</h2>
            {skills.map(el => <p className="fs-6" key={el.skill}>{el.skill}</p>)}
          </div>
        </div>
      </div>
      <div className="col-md-8 py-1">
        <div className="card bg-light">
          <div className="card-body">
            <h2 className="fs-4 text-uppercase">Education</h2>

            <ul>
              {education.map(el => (
                <li className="my-4" key={el.name}>
                  <h3 className="text-primary fs-6">{el.name}</h3>
                  <p className="mb-0">{el.start} - {el.end}</p>
                  <p className="mt-0">{el.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
