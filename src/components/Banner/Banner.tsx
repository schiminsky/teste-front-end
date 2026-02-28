import './Banner.scss';
import BannerImg from '../../assets/images/banner.png';

function Banner() {
  return (
    <section className="main-banner-container">
      <img src={BannerImg} alt="Banner" />
    </section>
  );
}

export default Banner;