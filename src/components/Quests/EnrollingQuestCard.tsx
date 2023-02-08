import Link from 'next/link';
import { Quests } from 'src/types';

import styles from './quests.module.css';

const EnrollingQuestCard = ({ enrollQuest }: { enrollQuest: Quests }) => {
  const handleOpenQuest = (e: React.BaseSyntheticEvent) => {
    console.log(e.target);
  };
  const newTitle = enrollQuest.name.replace(/ /g, '');
  console.log('newTitle :>> ', newTitle);

  return (
    // <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={`${styles.title} ${styles.description}`}>
        {enrollQuest.name}
      </div>
      {/* <div className={styles.description}></div> */}
      <button
        onClick={(e) => {
          handleOpenQuest(e);
        }}
        className={styles.button}
      >
        <Link href={`/quests/enrolling/${newTitle}`} className={styles.link}>
          See all quests
        </Link>
      </button>
    </div>
    // </div>
  );
};

export default EnrollingQuestCard;
