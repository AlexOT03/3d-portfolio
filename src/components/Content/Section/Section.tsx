import { useContext, useEffect, useRef } from "react";
import styles from "./Section.module.css";
import { ModelContext } from "../../../contexts/ModelContext";
import { Animations } from "../../../contexts/ModelContext.types";

interface SectionProps {
  prefix: string;
  heading: string;
  animation: Animations;
}

export const Section = ({
  children,
  heading,
  prefix,
  animation,
}: React.PropsWithChildren<SectionProps>) => {
  const { setActiveAnimation } = useContext(ModelContext);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        // Actualizar animacion del modelo
        setActiveAnimation(animation);
      }
    };

    const observer = new IntersectionObserver(intersectionCallback, {
      threshold: 0.3,
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.sectionInner}>
        <span className={styles.decor}>{prefix}</span>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.container}>{children}</div>
      </div>
    </section>
  );
};
