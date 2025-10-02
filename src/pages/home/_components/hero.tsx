import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <section className="hero-area">
      <Avatar className="profile">
        <AvatarImage
          src="https://res.cloudinary.com/db5lnd1t6/image/upload/v1759341531/IMG_4256_nf3kyk.jpg"
          alt="bibril"
        />
        <AvatarFallback>BI</AvatarFallback>
      </Avatar>
      <div className="content">
        <h3 className="heading">Badreddine Ibril</h3>
        <p className="description">
          A guy who turns rough ideas into modern interfaces everyone loves. In
          other words, I'm a <small>Frontend Engineer</small>.
        </p>
        <ul className="links">
          <li className="link">
            <a href="http://" target="_blank">
              badreddineibril@gmail.com
            </a>
          </li>
          <li className="link">
            <a href="http://" target="_blank">
              (+212) 630-195980
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
