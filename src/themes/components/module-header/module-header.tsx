import React from 'react';
import styles from './module-header.module.scss';

interface ModuleHeaderProps {
  title: string;
  description: string;
}

const ModuleHeader: React.FC<ModuleHeaderProps> = ({ title, description }) => {
  return (
    <header className={styles.moduleHeader}>
        <div className={styles.moduleHeaderDiv}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        </div>
       
     
    </header>
  );
};

export default ModuleHeader;
