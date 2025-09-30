import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="hero-area">
      <Avatar className="profile">
        <AvatarImage
          src="https://res.cloudinary.com/db5lnd1t6/image/upload/v1759266305/IMG_0928_jpg_s7tcad.jpg"
          alt="Badreddine Ibril"
        />
        <AvatarFallback>BI</AvatarFallback>
      </Avatar>
      <h1 className="heading">
        Hey, I'm Badreddine Ibril. <br />
        Frontend Engineer
      </h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, vero?
        Molestias nihil provident animi recusandae.
      </p>
      <div className="actions">
        <Button size="lg">Work with Me</Button>
        <div className="status">
          <span className="label">Available for new project</span>
        </div>
      </div>
    </section>
  );
}
