import './Banner.scss';
import bannerImg from '../../assets/images/banner.png';

function Banner() {
  return (
    <section className="main-banner-container">
      <img src={bannerImg} alt="Banner Econverse" />
    </section>
  );
}

export default Banner;