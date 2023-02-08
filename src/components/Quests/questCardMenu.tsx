import Link from 'next/link';
import { useRef } from 'react';

import styles from './quests.module.css';

const QuestCardMenu = () => {
  const parent = useRef(null);
  const handleOpenQuest = (e: React.BaseSyntheticEvent) => {
    console.log('this is the openQuest', e.target);
  };
  const handleClick = () => {
    console.log(parent);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Enrolling</div>
        <div className={styles.description}>Enrolling - new students</div>
        <button
          onClick={(e) => {
            handleOpenQuest(e);
          }}
          className={styles.button}
        >
          <Link href={'/quests/enrolling'} className={styles.link}>
            See all quests
          </Link>
        </button>
      </div>
      <div ref={parent} className={styles.container}>
        <div className={styles.title}>Soft Skills</div>
        <div className={styles.description}>
          The goal of these quest is to acquire cross-functional skills that are
          valuable for any tech-related job and in high demand among employers,
          such as the ability to communicate effectively, continuously learn,
          collaborate with others, and navigate the digital landscape
          responsibly.
        </div>
        <button onClick={handleClick} className={styles.button}>
          <Link href={'/quests/softskills'} className={styles.link}>
            See all quests
          </Link>
        </button>
      </div>
    </div>
  );
};

export default QuestCardMenu;
