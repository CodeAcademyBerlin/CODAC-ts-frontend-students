import Link from 'next/link';
import { ReactEventHandler, useRef } from 'react';
import { EnrollQuest } from 'src/types';

import styles from './quests.module.css';

const QuestCard = ({ enrollQuest }: { enrollQuest: EnrollQuest }) => {
  const handleOpenQuest = (e: React.BaseSyntheticEvent) => {
    console.log(e.target);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>{enrollQuest.name}</div>
        {/* <div className={styles.description}>Enrolling - new students</div> */}
        <button
          onClick={(e) => {
            handleOpenQuest(e);
          }}
          className={styles.button}
        >
          <Link
            href={`/quests/enrolling/${enrollQuest.name}`}
            className={styles.link}
          >
            See all quests
          </Link>
        </button>
      </div>
    </div>
  );
};

export default QuestCard;
