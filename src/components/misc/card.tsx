import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/button";

export default function Card({ type }: { type: "hero" | "error" }) {
  return (
    <section className="card-area">
      <Avatar className="profile">
        <AvatarImage
          src="https://res.cloudinary.com/db5lnd1t6/image/upload/w_250/v1759341531/IMG_4256_nf3kyk.jpg"
          alt="bibril"
        />
        <AvatarFallback>BI</AvatarFallback>
      </Avatar>
      <div className="content">
        <h3 className="heading">
          {type === "hero" ? "Badreddine Ibril" : "404"}
        </h3>
        <p className="description">
          {type === "hero" ? (
            <>
              A guy who turns rough ideas into modern interfaces everyone loves.
              In other words, I'm a <small>Frontend Engineer</small>.
            </>
          ) : (
            "Only one page here, nothing more to see."
          )}
        </p>
        <ul className="links">
          {type === "hero" ? (
            <>
              <li className="link">
                <a href="mailto: badreddineibril@gmail.com" target="_blank">
                  badreddineibril@gmail.com
                </a>
              </li>
              <li className="link">
                <a href="tel:+212630195980" target="_blank">
                  (+212) 630-195980
                </a>
              </li>
            </>
          ) : (
            <li className="link">
              <Button variant="link" asChild>
                <Link
                  to="/"
                  style={{ padding: 0, height: "auto", width: "fit-content" }}>
                  <ArrowLeft /> Back to home
                </Link>
              </Button>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
