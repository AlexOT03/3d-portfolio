import { ArrowUpRight } from "../Icons/ArrowUpRight";
import styles from "./Card.module.css";

interface CardProps {
  label: string;
  heading: string;
  link: string;
  imgUrl?: string;
  imgAlt?: string;
}

export const Card = ({
  heading,
  label,
  children,
  link,
  imgUrl,
  imgAlt,
}: React.PropsWithChildren<CardProps>) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <div className={styles.containerInner}>
        {imgUrl && (
          <img
            className={styles.thumbnail}
            src={imgUrl}
            alt={imgAlt || "Project Picture"}
          />
        )}
        <a href={link} className={styles.link} target="_blank">
          <h3 className={styles.heading}>
            {heading} <ArrowUpRight className={styles.arrow} />
          </h3>
        </a>

        {children}
      </div>
    </div>
  );
};
