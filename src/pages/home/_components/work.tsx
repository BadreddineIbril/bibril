import AllianceEverIcon from "@/assets/icons/Alliance-ever";
import HiGroupIcon from "@/assets/icons/hi-group";
import YouCanIcon from "@/assets/icons/youcan";

export default function Work() {
  const EXPERIENCES = [
    {
      role: "Frontend Engineer",
      start: new Date("10-16-2023"),
      end: new Date(),
      company: {
        name: "YouCan",
        icon: <YouCanIcon />,
      },
    },
    {
      role: "Full Stack Developer",
      start: new Date("04-01-2023"),
      end: new Date("10-01-2023"),
      company: {
        name: "Hi Group",
        icon: <HiGroupIcon />,
      },
    },
    {
      role: "Full Stack Developer",
      start: new Date("02-01-2023"),
      end: new Date("05-01-2023"),
      company: {
        name: "Alliance Ever",
        icon: <AllianceEverIcon />,
      },
    },
  ];

  return (
    <section className="work-area">
      <h3 className="heading">Work Experience</h3>
      <ul className="list">
        {EXPERIENCES.map((e, i) => (
          <li key={i} className="item">
            <div className="timeline">
              <span className="start">
                {e.start.toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
              {" - "}
              <span className="end">
                {e.end.toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="info">
              <span className="role">{e.role} at</span>
              <div className="company" data-company={e.company.name}>
                {e.company.icon}

                <span className="name">{e.company.name}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
